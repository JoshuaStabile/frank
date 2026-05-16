import { DEFAULT_CONFIG, STATES } from './constants.js';
import { applyState } from './state-machine.js';

export class FrankCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this._currentState = 'idle';
    this._currentBpm = 120;
    this._currentImage = null;

    // timers
    this.idleTimer = null;
    this.danceTimer = null;
    this.respondTimer = null;
  }

  static getConfigElement() {
    return document.createElement('frank-card-editor');
  }

  static getStubConfig() {
    return DEFAULT_CONFIG;
  }

  getCardSize() {
    return 6;
  }

  setConfig(config) {
    this.config = {
      ...DEFAULT_CONFIG,
      ...config,
    };

    this.renderCard();
  }

  renderCard() {
    const zoom = this.config.zoom / 100;

    this.shadowRoot.innerHTML = `
        <style>
        :host {
            display: flex;
        }
        </style>

        <div id="scene">
            <img id="frank-image">
        </div>
    `;

    this.el = {
        image: this.shadowRoot.getElementById('frank-image'),
    };
  }

  set hass(hass) {
    if (!hass) return;

    // Initial render
    if (!this.contentReady) {
        this.renderCard();
        this.contentReady = true;
    }

    const {
        entity,
        media_entity: mediaEntity,
        bpm_entity: bpmEntity,
    } = this.config;

    // ----------------------------
    // Read Home Assistant states
    // ----------------------------

    const voiceState = String(
        hass.states?.[entity]?.state || 'idle'
    ).toLowerCase();

    const mediaState = String(
        hass.states?.[mediaEntity]?.state || 'paused'
    ).toLowerCase();

    const bpmRaw = hass.states?.[bpmEntity]?.state;
    const bpm = Number.parseFloat(bpmRaw);

    const currentBpm = Number.isFinite(bpm)
        ? bpm
        : 120;

    // ----------------------------
    // Prevent unnecessary updates
    // ----------------------------

    if (
        this._lastVoiceState === voiceState &&
        this._lastMediaState === mediaState &&
        this._lastBpm === currentBpm
    ) {
        return;
    }

    this._lastVoiceState = voiceState;
    this._lastMediaState = mediaState;
    this._lastBpm = currentBpm;

    // ----------------------------
    // Determine effective state
    // ----------------------------

    let effectiveState = STATES.IDLE;

    if (
        voiceState.includes('respond') ||
        voiceState.includes('speak') ||
        voiceState.includes('tts')
    ) {
        effectiveState = STATES.RESPONDING;

    } else if (
        voiceState.includes('listen') ||
        voiceState.includes('wake')
    ) {
        effectiveState = STATES.LISTENING;

    } else if (
        voiceState.includes('process') ||
        voiceState.includes('think')
    ) {
        effectiveState = STATES.PROCESSING;

    } else if (mediaState === 'playing') {
        effectiveState = STATES.DANCING;
    }

    // ----------------------------
    // Skip duplicate animations
    // ----------------------------

    const bpmChanged =
        effectiveState === STATES.DANCING &&
        this._currentBpm !== currentBpm;

    if (
        this._currentState === effectiveState &&
        !bpmChanged
    ) {
        return;
    }

    this._currentState = effectiveState;
    this._currentBpm = currentBpm;

    // ----------------------------
    // Apply animation/state
    // ----------------------------

    applyState(
        this,
        effectiveState,
        currentBpm
    );
  }
}