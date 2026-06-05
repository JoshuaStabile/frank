import { System } from './system/System.js';

// #region FrankOSCard Class Definition

export class FrankOSCard extends HTMLElement {

  // #region constructor
  constructor() {
    super();
  }
  // #endregion

  // #region Lovelace methods
  static getConfigElement() { return document.createElement('frank-card-editor'); }
  static getStubConfig() { return { entity: "", media_entity: "", bpm_entity: "", respond_delay: 0, zoom: 85, transparent_bg: false }; }
  static getCardSize() { return 6; }
  // #endregion

  // #region setConfig

  setConfig(config) {
    console.log('Entering setConfig');
    if (!config.entity && !this.config) {
      this.config = { ...config, entity: 'assist_satellite.example' };
    } else {
      this.config = config;
    }
    if (this.contentReady) {
      this.init();
    }
  }

  // #endregion

  // #region hass setter

  set hass(hass) {
    console.log('Entering hass setter');
    if (!hass) return;
    if (!this.contentReady) {
      this.init()
      this.contentReady = true;
    }
  }

  // #endregion

  // #region init

  init() {
    console.log('Initializing FrankOSCard');
    this.setupDOM();
  }

  // #endregion

  // #region setupDOM

  setupDOM() {
    console.log('Setting up DOM');
    this.innerHTML = `
    <div id="scene">
        <div id="menubar" class="menubar">
            <!-- Menubar content will be injected here -->
        </div>

        <div id="desktop" class="desktop">            
            <!-- Windows will be injected here -->
        </div>  
    </div>
    `;
  }

  // #endregion

  connectedCallback() {
    console.log('FrankOSCard connected to DOM');
    this.system = new System();
    this.system.init();
  }

  disconnectedCallback() {
    console.log('FrankOSCard disconnected from DOM');
    this.system.cleanup();
  }
}

// #endregion