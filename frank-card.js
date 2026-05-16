// #region SVG SPRITES

const SPRITES = {
  FRANK: {
    IDLE: [
      `<?xml version="1.0" encoding="UTF-8"?>
<svg id="idle" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <g id="layer-0" fill="#fefefe" stroke="none" transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)">
    <path d="M0 320 l0 -320 320 0 320 0 0 320 0 320 -320 0 -320 0 0 -320z m200
80 l0 -40 -20 0 -20 0 0 40 0 40 20 0 20 0 0 -40z m160 -60 l0 -100 -40 0 -40
0 0 20 0 20 20 0 20 0 0 80 0 80 20 0 20 0 0 -100z m120 60 l0 -40 -20 0 -20
0 0 40 0 40 20 0 20 0 0 -40z m-240 -220 l0 -20 80 0 80 0 0 20 0 20 20 0 20
0 0 -20 0 -20 -20 0 -20 0 0 -20 0 -20 -80 0 -80 0 0 20 0 20 -20 0 -20 0 0
20 0 20 20 0 20 0 0 -20z"/>
  </g>
  <g id="layer-1" fill="#000000" stroke="none" transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)">
    <path d="M160 400 l0 -40 20 0 20 0 0 40 0 40 -20 0 -20 0 0 -40z M320 360 l0
-80 -20 0 -20 0 0 -20 0 -20 40 0 40 0 0 100 0 100 -20 0 -20 0 0 -80z M440
400 l0 -40 20 0 20 0 0 40 0 40 -20 0 -20 0 0 -40z M200 180 l0 -20 20 0 20 0
0 -20 0 -20 80 0 80 0 0 20 0 20 20 0 20 0 0 20 0 20 -20 0 -20 0 0 -20 0 -20
-80 0 -80 0 0 20 0 20 -20 0 -20 0 0 -20z"/>
  </g></svg>`
    ],
    NEUTRAL: [
      `<?xml version="1.0" encoding="UTF-8"?>
<svg id="neutral" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <g id="layer-0" fill="#ffffff" stroke="none" transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)">
    <path d="M0 320 l0 -320 320 0 320 0 0 320 0 320 -320 0 -320 0 0 -320z m200
80 l0 -40 -20 0 -20 0 0 40 0 40 20 0 20 0 0 -40z m160 -60 l0 -100 -40 0 -40
0 0 20 0 20 20 0 20 0 0 80 0 80 20 0 20 0 0 -100z m120 60 l0 -40 -20 0 -20
0 0 40 0 40 20 0 20 0 0 -40z m-80 -260 l0 -20 -80 0 -80 0 0 20 0 20 80 0 80
0 0 -20z"/>
  </g>
  <g id="layer-1" fill="#000000" stroke="none" transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)">
    <path d="M160 400 l0 -40 20 0 20 0 0 40 0 40 -20 0 -20 0 0 -40z M320 360 l0
-80 -20 0 -20 0 0 -20 0 -20 40 0 40 0 0 100 0 100 -20 0 -20 0 0 -80z M440
400 l0 -40 20 0 20 0 0 40 0 40 -20 0 -20 0 0 -40z M240 140 l0 -20 80 0 80 0
0 20 0 20 -80 0 -80 0 0 -20z"/>
  </g>
</svg>`
    ],
    JIBJAB: [
      `<?xml version="1.0" encoding="UTF-8"?>
<svg id="jibjab_1" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <g id="layer-0" fill="#ffffff" stroke="none" transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)">
    <path d="M0 320 l0 -320 320 0 320 0 0 320 0 320 -320 0 -320 0 0 -320z m200
80 l0 -40 -20 0 -20 0 0 40 0 40 20 0 20 0 0 -40z m160 -60 l0 -100 -40 0 -40
0 0 20 0 20 20 0 20 0 0 80 0 80 20 0 20 0 0 -100z m120 60 l0 -40 -20 0 -20
0 0 40 0 40 20 0 20 0 0 -40z m-80 -220 l0 -20 20 0 20 0 0 -20 0 -20 -20 0
-20 0 0 -20 0 -20 -80 0 -80 0 0 20 0 20 -20 0 -20 0 0 20 0 20 20 0 20 0 0
20 0 20 80 0 80 0 0 -20z M240 140 l0 -20 80 0 80 0 0 20 0 20 -80 0 -80 0 0
-20z"/>
  </g>
  <g id="layer-1" fill="#000000" stroke="none" transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)">
    <path d="M160 400 l0 -40 20 0 20 0 0 40 0 40 -20 0 -20 0 0 -40z M320 360 l0
-80 -20 0 -20 0 0 -20 0 -20 40 0 40 0 0 100 0 100 -20 0 -20 0 0 -80z M440
400 l0 -40 20 0 20 0 0 40 0 40 -20 0 -20 0 0 -40z M240 180 l0 -20 -20 0 -20
0 0 -20 0 -20 20 0 20 0 0 -20 0 -20 80 0 80 0 0 20 0 20 20 0 20 0 0 20 0 20
-20 0 -20 0 0 20 0 20 -80 0 -80 0 0 -20z m160 -40 l0 -20 -80 0 -80 0 0 20 0
20 80 0 80 0 0 -20z"/>
  </g>
</svg>`,
      `<?xml version="1.0" encoding="UTF-8"?>
<svg id="jibjab_2" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <g id="layer-0" fill="#ffffff" stroke="none" transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)">
    <path d="M0 320 l0 -320 320 0 320 0 0 320 0 320 -320 0 -320 0 0 -320z m200
80 l0 -40 -20 0 -20 0 0 40 0 40 20 0 20 0 0 -40z m160 -60 l0 -100 -40 0 -40
0 0 20 0 20 20 0 20 0 0 80 0 80 20 0 20 0 0 -100z m120 60 l0 -40 -20 0 -20
0 0 40 0 40 20 0 20 0 0 -40z m-120 -220 l0 -20 20 0 20 0 0 -20 0 -20 -20 0
-20 0 0 -20 0 -20 -40 0 -40 0 0 20 0 20 -20 0 -20 0 0 20 0 20 20 0 20 0 0
20 0 20 40 0 40 0 0 -20z M280 140 l0 -20 40 0 40 0 0 20 0 20 -40 0 -40 0 0
-20z"/>
  </g>
  <g id="layer-1" fill="#000000" stroke="none" transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)">
    <path d="M160 400 l0 -40 20 0 20 0 0 40 0 40 -20 0 -20 0 0 -40z M320 360 l0
-80 -20 0 -20 0 0 -20 0 -20 40 0 40 0 0 100 0 100 -20 0 -20 0 0 -80z M440
400 l0 -40 20 0 20 0 0 40 0 40 -20 0 -20 0 0 -40z M280 180 l0 -20 -20 0 -20
0 0 -20 0 -20 20 0 20 0 0 -20 0 -20 40 0 40 0 0 20 0 20 20 0 20 0 0 20 0 20
-20 0 -20 0 0 20 0 20 -40 0 -40 0 0 -20z m80 -40 l0 -20 -40 0 -40 0 0 20 0
20 40 0 40 0 0 -20z"/>
  </g>
</svg>`,
      `<?xml version="1.0" encoding="UTF-8"?>
<svg id="jibjab_3" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <g id="layer-0" fill="#fefefe" stroke="none" transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)">
    <path d="M0 320 l0 -320 320 0 320 0 0 320 0 320 -320 0 -320 0 0 -320z m200
80 l0 -40 -20 0 -20 0 0 40 0 40 20 0 20 0 0 -40z m160 -60 l0 -100 -40 0 -40
0 0 20 0 20 20 0 20 0 0 80 0 80 20 0 20 0 0 -100z m120 60 l0 -40 -20 0 -20
0 0 40 0 40 20 0 20 0 0 -40z m-120 -220 l0 -20 20 0 20 0 0 -40 0 -40 -20 0
-20 0 0 -20 0 -20 -40 0 -40 0 0 20 0 20 -20 0 -20 0 0 40 0 40 20 0 20 0 0
20 0 20 40 0 40 0 0 -20z M280 120 l0 -40 40 0 40 0 0 40 0 40 -40 0 -40 0 0
-40z"/>
  </g>
  <g id="layer-1" fill="#000000" stroke="none" transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)">
    <path d="M160 400 l0 -40 20 0 20 0 0 40 0 40 -20 0 -20 0 0 -40z M320 360 l0
-80 -20 0 -20 0 0 -20 0 -20 40 0 40 0 0 100 0 100 -20 0 -20 0 0 -80z M440
400 l0 -40 20 0 20 0 0 40 0 40 -20 0 -20 0 0 -40z M280 180 l0 -20 -20 0 -20
0 0 -40 0 -40 20 0 20 0 0 -20 0 -20 40 0 40 0 0 20 0 20 20 0 20 0 0 40 0 40
-20 0 -20 0 0 20 0 20 -40 0 -40 0 0 -20z m80 -60 l0 -40 -40 0 -40 0 0 40 0
40 40 0 40 0 0 -40z"/>
  </g>
</svg>`,
      `<?xml version="1.0" encoding="UTF-8"?>
<svg id="jibjab_4" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <g id="layer-0" fill="#ffffff" stroke="none" transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)">
    <path d="M0 320 l0 -320 320 0 320 0 0 320 0 320 -320 0 -320 0 0 -320z m200
80 l0 -40 -20 0 -20 0 0 40 0 40 20 0 20 0 0 -40z m160 -60 l0 -100 -40 0 -40
0 0 20 0 20 20 0 20 0 0 80 0 80 20 0 20 0 0 -100z m120 60 l0 -40 -20 0 -20
0 0 40 0 40 20 0 20 0 0 -40z m-120 -220 l0 -20 20 0 20 0 0 -20 0 -20 -20 0
-20 0 0 -20 0 -20 -40 0 -40 0 0 20 0 20 -20 0 -20 0 0 20 0 20 20 0 20 0 0
20 0 20 40 0 40 0 0 -20z M280 140 l0 -20 40 0 40 0 0 20 0 20 -40 0 -40 0 0
-20z"/>
  </g>
  <g id="layer-1" fill="#000000" stroke="none" transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)">
    <path d="M160 400 l0 -40 20 0 20 0 0 40 0 40 -20 0 -20 0 0 -40z M320 360 l0
-80 -20 0 -20 0 0 -20 0 -20 40 0 40 0 0 100 0 100 -20 0 -20 0 0 -80z M440
400 l0 -40 20 0 20 0 0 40 0 40 -20 0 -20 0 0 -40z M280 180 l0 -20 -20 0 -20
0 0 -20 0 -20 20 0 20 0 0 -20 0 -20 40 0 40 0 0 20 0 20 20 0 20 0 0 20 0 20
-20 0 -20 0 0 20 0 20 -40 0 -40 0 0 -20z m80 -40 l0 -20 -40 0 -40 0 0 20 0
20 40 0 40 0 0 -20z"/>
  </g>
</svg>`
    ],
  }
}

// #endregion

// #region FrankCard Class Definition

class FrankCard extends HTMLElement {

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

  setupDOM() {
    const zoom = this.config.zoom !== undefined ? this.config.zoom : 85;
    const scale = zoom / 100;
    const width = 280 * scale;
    const height = 320 * scale;
    const bgStyle = this.config.transparent_bg ? 'background: transparent; box-shadow: none; border: none;' : 'background: var(--ha-card-background, var(--card-background-color, #ffffff));';

    this.shadowRoot.innerHTML = `
      <style>
        :host { display: flex; align-items: center; justify-content: center; ${bgStyle} border-radius: var(--ha-card-border-radius, 12px); overflow: hidden; width: 100%; }
        #scene { width: ${width}px; height: ${height}px; display: flex; align-items: center; justify-content: center; }
      </style>
      
      <div id="scene">
        <div id="frank-container">
          <!-- Frank's image will be injected here -->
        </div>
      </div>
    `;
  }



  initFrank() {
    const root = this.shadowRoot;
    const config = this.config;

    const el = {
      scene: root.getElementById('scene'),
      frankContainer: root.getElementById('frank-container'),
    };

    let stateNow = 'idle';
    let currentBaseLid = 0;

    const setSprite = (spr) => {
      el.frankContainer.innerHTML = spr;
      this._lastSprite = this._currentSprite;

      // id is stored in the SVG's root element
      this._currentSprite = el.frankContainer.querySelector('svg').id;
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
        if (this._currentSprite !== 'neutral') {
          setSprite(SPRITES.FRANK.NEUTRAL[0]);
        }
        else {
          const nextSprite = SPRITES.FRANK.JIBJAB[Math.floor(Math.random() * SPRITES.FRANK.JIBJAB.length)];
          setSprite(nextSprite);
        }

        // TODO: change to variable talk speed
        this.talkAnim = setTimeout(step, 500);
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
 
      } else if (state === 'processing') {
        
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

      const delaySeconds = config.respond_delay !== undefined ? parseFloat(config.respond_delay) : 0;

      if (mapped === 'responding' && this._lastEffectiveState !== 'responding' && delaySeconds > 0) {
        this.respondTimer = setTimeout(() => {
          this._lastEffectiveState = 'responding';
          animateFrank('responding', bpm);
        }, delaySeconds * 1000);
        return; 
      }

      this._lastEffectiveState = mapped;
      animateFrank(mapped, bpm);
    };

    this.applyState('idle', 120);
  }

  disconnectedCallback() {
    if (this.stopIdleCycle) this.stopIdleCycle();
    if (this.stopDanceCycle) this.stopDanceCycle();
    if (this.respondTimer) clearTimeout(this.respondTimer);
    if (this.talkAnim) clearTimeout(this.talkAnim);
  }
}

// #endregion

// #region Home Assistant Card Editor

class FrankCardEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  setConfig(config) {
    this._config = config;
    this.render();
  }

  set hass(hass) {
    this._hass = hass;
    const pickers = this.shadowRoot.querySelectorAll('ha-entity-picker');
    if (pickers.length > 0) {
      pickers.forEach(picker => { picker.hass = hass; });
    } else {
      this.render();
    }
  }

  configChanged(configKey, value) {
    if (!this._config) return;

    const newConfig = { ...this._config };
    if (value === '' || value === undefined || value === null) {
       delete newConfig[configKey];
    } else {
       newConfig[configKey] = value;
    }

    this._config = newConfig;

    this.dispatchEvent(new CustomEvent('config-changed', {
      detail: { config: this._config },
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    if (!this._config || !this._hass) return;

    this.shadowRoot.innerHTML = `
      <style>
        .card-config {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .side-by-side {
          display: flex;
          gap: 16px;
          margin-top: 8px;
        }
        .side-by-side > div {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        label {
          font-family: var(--paper-font-body1_-_font-family, sans-serif);
          font-size: 14px;
          color: var(--primary-text-color);
        }
        .secondary {
          font-size: 12px;
          color: var(--secondary-text-color);
          margin-top: 2px;
        }
      </style>
      <div class="card-config">
        <ha-entity-picker
          id="entity-picker"
          label="Voice Assistant Entity (Required)"
          allow-custom-entity
        ></ha-entity-picker>

        <ha-entity-picker
          id="media-picker"
          label="Media Player Entity (Optional)"
          allow-custom-entity
        ></ha-entity-picker>

        <ha-entity-picker
          id="bpm-picker"
          label="BPM Sensor Entity (Optional)"
          allow-custom-entity
        ></ha-entity-picker>

        <div class="side-by-side">
          <div>
             <label>Response Delay: <span id="delay-val">${this._config.respond_delay !== undefined ? this._config.respond_delay : 0}</span>s</label>
             <div class="secondary">Time before frank starts talking.</div>
             <ha-slider
               id="delay-slider"
               min="0" max="16" step="0.5"
               pin
               value="${this._config.respond_delay !== undefined ? this._config.respond_delay : 0}"
             ></ha-slider>
          </div>
          <div>
             <label>Zoom Scale: <span id="zoom-val">${this._config.zoom !== undefined ? this._config.zoom : 85}</span>%</label>
             <ha-slider
               id="zoom-slider"
               min="10" max="200" step="1"
               pin
               value="${this._config.zoom !== undefined ? this._config.zoom : 85}"
             ></ha-slider>
          </div>
        </div>

        <ha-formfield label="Transparent Background">
          <ha-switch id="bg-switch"></ha-switch>
        </ha-formfield>
      </div>
    `;

    const entityPicker = this.shadowRoot.querySelector('#entity-picker');
    entityPicker.hass = this._hass;
    entityPicker.value = this._config.entity;
    entityPicker.includeDomains = ['assist_satellite'];
    entityPicker.addEventListener('value-changed', (ev) => this.configChanged('entity', ev.detail.value));

    const mediaPicker = this.shadowRoot.querySelector('#media-picker');
    mediaPicker.hass = this._hass;
    mediaPicker.value = this._config.media_entity;
    mediaPicker.includeDomains = ['media_player'];
    mediaPicker.addEventListener('value-changed', (ev) => this.configChanged('media_entity', ev.detail.value));

    const bpmPicker = this.shadowRoot.querySelector('#bpm-picker');
    bpmPicker.hass = this._hass;
    bpmPicker.value = this._config.bpm_entity;
    bpmPicker.includeDomains = ['sensor'];
    bpmPicker.addEventListener('value-changed', (ev) => this.configChanged('bpm_entity', ev.detail.value));

    const delaySlider = this.shadowRoot.querySelector('#delay-slider');
    const delayVal = this.shadowRoot.querySelector('#delay-val');
    delaySlider.addEventListener('change', (ev) => {
      delayVal.innerText = ev.target.value;
      this.configChanged('respond_delay', Number(ev.target.value));
    });

    const zoomSlider = this.shadowRoot.querySelector('#zoom-slider');
    const zoomVal = this.shadowRoot.querySelector('#zoom-val');
    zoomSlider.addEventListener('change', (ev) => {
      zoomVal.innerText = ev.target.value;
      this.configChanged('zoom', Number(ev.target.value));
    });

    const bgSwitch = this.shadowRoot.querySelector('#bg-switch');
    bgSwitch.checked = this._config.transparent_bg === true;
    bgSwitch.addEventListener('change', (ev) => {
      this.configChanged('transparent_bg', ev.target.checked);
    });
  }
}

// #endregion

// #region Custom Element Registration

customElements.define('frank-card-editor', FrankCardEditor);
customElements.define('frank-card', FrankCard);

// #endregion

// #region Card Definition
window.customCards = window.customCards || [];
window.customCards.push({
  type: 'frank-card',
  name: 'Frank Custom Card',
  preview: true,
  description: 'A responsive, animated Frank AI assistant card that reacts to voice and dances to music.'
});

// #endregion