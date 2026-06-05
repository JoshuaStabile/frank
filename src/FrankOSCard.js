import { STYLES } from './config/styles.js';
import { FrankApp } from './applications/FrankApp.js';
import { System } from './system/System.js';

// #region FrankOSCard Class Definition

export class FrankOSCard extends HTMLElement {

  // #region constructor
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.system = new System();

    this.frankApp = new FrankApp();
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
      this.init();
    }
  }

  // #endregion

  // #region hass setter

  set hass(hass) {
    if (!hass) return;
    if (!this.contentReady) {
      this.init()
    }
  }

  // #endregion

  // #region init

  init() {
    this.setupDOM();
    this.system.init();
    this.frankApp.init();
  }

  // #endregion

  // #region setupDOM

  setupDOM() {
    this.shadowRoot.innerHTML = `
    <style>
        ${STYLES}
    </style>

    <div id="scene">
        <div class="menubar">
            <div class="menubar-left">
                <div class="menubar-item" data-menu="apple">
                    <!-- svg 12x12-->
                </div>
                <div class="menubar-item" data-menu="file">File</div>
                <div class="menubar-item" data-menu="edit">Edit</div>
                <div class="menubar-item" data-menu="view">View</div>
                <div class="menubar-item" data-menu="help">Help</div>
            </div>
            <div class="menubar-right">
                <div class="weather" id="weather"></div>
                <div class="clock" id="clock"></div>
                <div class="menubar-item app-menu" data-menu="application">
                    <img src="/assets/images/MacSE.png" alt="" class="app-icon" id="current-app-icon" width="16" height="16">
                    <span class="app-name" id="current-app-name">Finder</span>
                </div>
            </div>
        </div>

        <div id="desktop" class="desktop">            
            <div class="window">
                <div class="title-bar"> 
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
    </div>
    

    `;
  }

  // #endregion

  disconnectedCallback() {
    this.system.cleanup();
    this.frankApp.cleanup();
  }
}

// #endregion