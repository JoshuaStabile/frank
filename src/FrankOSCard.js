import { STYLES } from './config/styles.js';
import { FrankApp } from './applications/FrankApp.js';

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
    this.frankApp.cleanup();
  }
}

// #endregion

initializeSystem();
initializeEventListeners();
checkUrlParameters();


function initializeSystem() {
  initializeClock();
  initializeDesktop();
  if (typeof MenuManager !== 'undefined') {
    MenuManager.init();
  }
}

function checkUrlParameters() {
  const urlParams = new URLSearchParams(window.location.search);
  const page = urlParams.get('page');
  if (page) {
    openPage(page);
  }
}

// Clock functionality
function initializeClock() {
  updateClock();
  setInterval(updateClock, 1000);
}

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  document.getElementById('clock').textContent = `${hours}:${minutes}`;
}

// Background Management
function setBackground(image) {
  const desktop = document.getElementById('desktop');
  const viewMenuItems = document.querySelectorAll('#view-menu .dropdown-item');
  viewMenuItems.forEach(item => {
    item.textContent = item.textContent.replace('✔ ', '');
  });

  const backgrounds = {
    MacOS: { url: 'MacOS.jpg', repeat: 'no-repeat center center fixed', size: 'cover' },
    cats: { url: 'cats.png', repeat: 'repeat', size: 'auto' },
    circuits: { url: 'circuits.png', repeat: 'repeat', size: 'auto' },
    grass: { url: 'grass.png', repeat: 'repeat', size: 'auto' },
    pebbles: { url: 'pebbles.png', repeat: 'repeat', size: 'auto' },
    plaid: { url: 'plaid.png', repeat: 'repeat', size: 'auto' }
  };

  const bg = backgrounds[image];
  if (bg) {
    desktop.style.background = `url('/assets/images/backgrounds/${bg.url}') ${bg.repeat}`;
    desktop.style.backgroundSize = bg.size;
    document.querySelector(`#view-menu .dropdown-item:contains('${image}')`).textContent = `✔ ${image}`;

    // Save state after background change
    if (typeof StateManager !== 'undefined') {
      StateManager.saveState();
    }
  }
}

// About Window
function showAboutWindow() {
  const content = `
        <div style="display: flex; align-items: center;">
            <img src="/assets/images/moof.png" alt="Moof" style="width: 64px; height: 64px; margin-right: 20px;">
            <div>
                <p>frank</p>
            </div>
        </div>
    `;

  const aboutWindow = new Window(
    'About This Website',
    content,
    'about',
    window.innerWidth / 2 - 200,
    window.innerHeight / 2 - 150
  );

  // Configure the about window
  aboutWindow.element.style.resize = 'none';
  aboutWindow.element.style.width = '400px';
  aboutWindow.element.style.height = '200px';
  aboutWindow.element.querySelector('.window-resizer')?.remove();
  aboutWindow.element.querySelector('.window-content').style.overflow = 'hidden';

  // Play sound if available
  if (typeof SoundManager !== 'undefined') {
    SoundManager.play('click');
  }
}

// Sound Management
function toggleSound() {
  const enabled = localStorage.getItem('soundEnabled') !== 'false';
  localStorage.setItem('soundEnabled', !enabled);

  if (typeof SoundManager !== 'undefined') {
    SoundManager.setVolume(!enabled ? 0.5 : 0);
  }

  // Update menu checkmark
  if (typeof StateManager !== 'undefined') {
    StateManager.updateSoundMenuCheck(!enabled);
  }
}

// Theme Toggle
function toggleTheme() {
  window.location.href = '/';
}

// Initialize desktop and event listeners
function initializeEventListeners() {
  // Global click handler for closing menus and handling desktop clicks
  document.addEventListener('mousedown', (e) => {
    // Handle menu closing
    if (!e.target.closest('.menubar-item') && !e.target.closest('.dropdown-menu')) {
      if (typeof MenuManager !== 'undefined') {
        MenuManager.closeAllMenus();
      }
    }

    // Handle clicks directly on the desktop (not on windows or menus)
    if (e.target.id === 'desktop') {
      e.preventDefault();
      e.stopPropagation();

      // Deactivate all windows and set to base z-index
      document.querySelectorAll('.window').forEach(win => {
        win.classList.remove('active');
        win.style.zIndex = '1';
        win.querySelector('.window-titlebar').style.background =
          'var(--system7-titlebar-inactive)';
      });

      // Set Finder as active application
      const appMenu = document.querySelector('.app-menu');
      appMenu.querySelector('.app-icon').src = '/assets/images/MacSE.png';
      appMenu.querySelector('.app-name').textContent = 'Finder';

      // Force MenuManager to update with Finder as active
      if (typeof MenuManager !== 'undefined') {
        MenuManager.forceFinderActive();
      }
    }
  });

  // Global key handlers
  document.addEventListener('keydown', (e) => {
    // Add key shortcuts here if needed
    if (e.key === 'Escape') {
      if (typeof MenuManager !== 'undefined') {
        MenuManager.closeAllMenus();
      }
    }
  });

  // Window focus handling
  document.addEventListener('mousedown', (e) => {
    const window = e.target.closest('.window');
    if (window) {
      Array.from(document.querySelectorAll('.window')).forEach(w => {
        if (w !== window) {
          w.classList.remove('active');
        }
      });
      window.classList.add('active');
    }
  });
}