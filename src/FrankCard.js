import { SPRITES } from './config/sprites.js';

// #region FrankCard Class Definition

export class FrankCard extends HTMLElement {

  // #region constructor
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._lastHassVoice = null;
    this._lastHassMedia = null;
    this._lastHassBpm = null;
    this._lastSprite = null;
    this._currentSprite = null;
  }
  // #endregion

  // #region Lovelace methods
  static getConfigElement() { return document.createElement('frank-card-editor'); }
  static getStubConfig() { return { entity: "", media_entity: "", bpm_entity: "", respond_delay: 0, zoom: 85, transparent_bg: false }; }
  static getCardSize() { return 6; }
  // #endregion

  // #region setConfig

  setConfig(config) {
    if (!config.entity && !this.config) {
      this.config = { ...config, entity: 'assist_satellite.example' };
    } else {
      this.config = config;
    }
    if (this.contentReady) {
        this.setupDOM();
        this.initFrank();
        this.applyState(this._currentState, this._currentBpm);
    }
  }

  // #endregion

  // #region hass setter

  set hass(hass) {
    if (!hass) return;
    if (!this.contentReady) {
      this.setupDOM();
      this.initFrank();
      this.contentReady = true;
    }

    const entity = this.config.entity;
    const mediaEntity = this.config.media_entity;
    const bpmEntity = this.config.bpm_entity;
    const weatherEntity = this.config.weather_entity;

    const newVoiceState = (entity && hass.states[entity]) ? hass.states[entity].state.toLowerCase() : 'idle';
    const newMediaState = (mediaEntity && hass.states[mediaEntity]) ? hass.states[mediaEntity].state.toLowerCase() : 'paused';
    const newBpmState = (bpmEntity && hass.states[bpmEntity]) ? hass.states[bpmEntity].state : '120';

    if (this._lastHassVoice === newVoiceState && this._lastHassMedia === newMediaState && this._lastHassBpm === newBpmState) return;

    this._lastHassVoice = newVoiceState;
    this._lastHassMedia = newMediaState;
    this._lastHassBpm = newBpmState;

    const currentBpm = isNaN(parseFloat(newBpmState)) ? 120 : parseFloat(newBpmState); 
    let effectiveState = 'idle';
    if (['listen', 'wake', 'process', 'think', 'respond', 'speak', 'tts'].some(s => newVoiceState.includes(s))) {
      effectiveState = newVoiceState; 
    } else if (newMediaState === 'playing') {
      effectiveState = 'dancing';
    }

    if (this._currentState !== effectiveState || (effectiveState === 'dancing' && this._currentBpm !== currentBpm)) {
      this._currentState = effectiveState;
      this._currentBpm = currentBpm;
      if (this.applyState) this.applyState(effectiveState, currentBpm);
    }
  }

  // #endregion

  // #region setupDOM

  setupDOM() {
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: flex; align-items: center; justify-content: center; background: #ffffff; border-radius: var(--ha-card-border-radius, 12px); overflow: hidden; width: 100%; height: 100%; }
      </style>

      <div id="scene">
        <div class="window">
            <div class="title-bar" style="width:95%; height:95%; display:flex; align-items:center; justify-content:center;"> 
                <h1 class="title">Frank</h1>
            </div>
            <div class="separator"></div>
            
            <div class="window-pane">
                <div id="frank-container">
                    <!-- Frank's image will be injected here -->
                </div>
                <div id="state-display">
                    <!-- display current state here -->
                </div>
            </div>
        </div>

      </div>
    `;
  }

  // #endregion

  updateSpriteScale() {
    if (!this._currentSprite) {
      console.log('[Frank] updateSpriteScale: no current sprite');
      return;
    }

    // container is the frank card elm
    const container = this.shadowRoot.querySelector('#scene');

    if (!container) {
      console.log('[Frank] updateSpriteScale: no frank-card found');
      return;
    }

    const spriteWidth =
      this._currentSprite.width?.baseVal?.value ||
      this._currentSprite.getBoundingClientRect().width;

    const spriteHeight =
      this._currentSprite.height?.baseVal?.value ||
      this._currentSprite.getBoundingClientRect().height;

    const screenFill = 0.8;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // target area inside container
    const targetWidth = containerWidth * screenFill;
    const targetHeight = containerHeight * screenFill;

    // scale independently from sprite dimensions
    const scaleX = targetWidth / spriteWidth;
    const scaleY = targetHeight / spriteHeight;

    // use smaller scale so sprite fully fits
    const scale = Math.max(
      1,
      Math.floor(Math.min(scaleX, scaleY))
    );

    const finalWidth = spriteWidth * scale;
    const finalHeight = spriteHeight * scale;

    const svg = this._currentSprite;
    svg.setAttribute('width', finalWidth);
    svg.setAttribute('height', finalHeight);
  }

  initFrank() {
    const root = this.shadowRoot;
    const config = this.config;

    const el = {
      scene: root.getElementById('scene'),
      frankContainer: root.getElementById('frank-container'),
    };

    this.handleResize = () => {
      this.updateSpriteScale();
    };

    window.addEventListener('resize', this.handleResize);

    let stateNow = 'idle';
    let currentBaseLid = 0;

    const setSprite = (spr) => {
      el.frankContainer.innerHTML = spr;

      const svg = el.frankContainer.querySelector('svg');

      if (!svg) {
        console.log('[Frank] setSprite: no SVG found after injection');
        return;
      }

      this._lastSprite = this._currentSprite;
      this._currentSprite = svg; 

      // re-scale after sprite swap
      this.updateSpriteScale();
    };

    function idle_smile() {
      setSprite(SPRITES.FRANK.IDLE[0]);
    }

    this.idleTimer = null;
    this.danceTimer = null;
    this.danceLedTimer = null;
    this.talkAnim = null;
    this.respondTimer = null;

    const IDLE_BEHAVIORS = [
      { name: 'smile', exec() {idle_smile()}, min: 5000, max: 10000, weight: 1 },
    ];

    const runNextIdleBehavior = () => {
      if (stateNow !== 'idle') return;
      let r = Math.random() * IDLE_BEHAVIORS.reduce((s, b) => s + b.weight, 0), chosen = IDLE_BEHAVIORS[0];
      for (const b of IDLE_BEHAVIORS) { r -= b.weight; if (r <= 0) { chosen = b; break; } }
      chosen.exec();
      this.idleTimer = setTimeout(runNextIdleBehavior, chosen.min + Math.random() * (chosen.max - chosen.min));
    };

    this.startIdleCycle = () => {
      this.stopIdleCycle();
      this.idleTimer = setTimeout(runNextIdleBehavior, 2000 + Math.random() * 3000);
    };

    this.stopIdleCycle = () => {
      if (this.idleTimer) { clearTimeout(this.idleTimer); this.idleTimer = null; }
      if (this.pupilTimer) { clearTimeout(this.pupilTimer); this.pupilTimer = null; }
      if (this.glitchRaf) { cancelAnimationFrame(this.glitchRaf); this.glitchRaf = null; }
    };

    this.stopDanceCycle = () => {
      if (this.danceTimer) { clearTimeout(this.danceTimer); this.danceTimer = null; }
      if (this.danceLedTimer) { clearTimeout(this.danceLedTimer); this.danceLedTimer = null; }
    };

    this.startDanceCycle = (bpm) => {
      this.stopDanceCycle();
      let dancePhase = 0; 
      let currentRoutine = Math.floor(Math.random() * 8);
      
      const currentBpm = Math.max(60, Math.min(200, bpm)); 
      const beatMs = (60 / currentBpm) * 1000;
      const beatSec = beatMs / 1000;
      
      let expectedNextTick = performance.now() + beatMs;

      const step = () => {
        if (stateNow !== 'dancing') return;

        if (dancePhase > 0 && dancePhase % 16 === 0) {
            let nextRoutine;
            do { nextRoutine = Math.floor(Math.random() * 8); } while (nextRoutine === currentRoutine);
            currentRoutine = nextRoutine;
        }

        const choreoBlock = currentRoutine; 
        const isDownBeat = dancePhase % 2 === 0;
        const isQuadBeat = dancePhase % 4 === 0;
        const phaseMod4 = dancePhase % 4;
        const phaseMod8 = dancePhase % 8;
        let dirX = isDownBeat ? 1 : -1;

        if (this.danceLedTimer) clearTimeout(this.danceLedTimer);
        this.danceLedTimer = setTimeout(() => {
          if (stateNow === 'dancing') {

          }
        }, beatMs * 0.3);

        let moveDur = beatSec;
        let bodyDur = beatSec * 2;

        const executeTick = () => {
          dancePhase++;
          const now = performance.now();
          expectedNextTick += beatMs;
          const delay = Math.max(0, expectedNextTick - now);
          this.danceTimer = setTimeout(step, delay);
        };
        executeTick();
      };
      
      step();
    };

    const startRespondAnim = () => {
      if (this.talkAnim) clearTimeout(this.talkAnim);
      const step = () => {
        // if the sprite has changed, revert back to neutral sprite

        // TODO: make a single source for sprite ids
        if (this._currentSprite?.id !== 'neutral') {
          setSprite(SPRITES.FRANK.NEUTRAL[0]);
        }
        else {
          const nextSprite = SPRITES.FRANK.JIBJAB[Math.floor(Math.random() * SPRITES.FRANK.JIBJAB.length)];
          setSprite(nextSprite);
        }

        const talkSpeed = config.talk_speed !== undefined ? parseFloat(config.talk_speed) : 200;

        // TODO: change to variable talk speed
        this.talkAnim = setTimeout(step, talkSpeed);
      };
      step();
    };

    const animateFrank = (state, bpm) => {
      stateNow = state;
      if (this.talkAnim) clearTimeout(this.talkAnim);
      this.stopIdleCycle();
      this.stopDanceCycle();

      if (state === 'idle') {
        // idle is the default state, so we start the idle cycle which will pick random idle behaviors to execute
        this.startIdleCycle();
      } else if (state === 'dancing') {

      } else if (state === 'listening') {
        this.displayState(state);
      } else if (state === 'processing') {
        this.displayState(state);
      } else if (state === 'responding') {
        startRespondAnim();
      }
    };

    this.applyState = (raw, bpm) => {
      const s = (raw || 'idle').toLowerCase();
      let mapped = 'idle';
      if (s.includes('respond') || s.includes('speak') || s.includes('tts')) mapped = 'responding';
      else if (s.includes('listen') || s.includes('wake')) mapped = 'listening';
      else if (s.includes('process') || s.includes('think')) mapped = 'processing';
      else if (s === 'dancing') mapped = 'dancing';

      if (this.respondTimer) {
        clearTimeout(this.respondTimer);
        this.respondTimer = null;
      }

      const delayMs = config.respond_delay !== undefined ? parseFloat(config.respond_delay) : 0;

      if (mapped === 'responding' && this._lastEffectiveState !== 'responding' && delayMs > 0) {
        this.respondTimer = setTimeout(() => {
          this._lastEffectiveState = 'responding';
          animateFrank('responding', bpm);
        }, delayMs);
        return; 
      }

      this._lastEffectiveState = mapped;
      animateFrank(mapped, bpm);
    };

    this.displayState = (state) => {
      
    }

    this.applyState('idle', 120);
  }

  disconnectedCallback() {
    if (this.handleResize) {
      window.removeEventListener('resize', this.handleResize);
    }

    if (this.stopIdleCycle) this.stopIdleCycle();
    if (this.stopDanceCycle) this.stopDanceCycle();
    if (this.respondTimer) clearTimeout(this.respondTimer);
    if (this.talkAnim) clearTimeout(this.talkAnim);
  }
}

// #endregion