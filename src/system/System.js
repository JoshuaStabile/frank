import { MenuBar } from './MenuBar.js';
import { StateManager } from './StateManager.js';
import { AppManager } from './AppManager.js';

export class System {
    constructor() {
        this.menubar = null;
        this.stateManager = null;
        this.appManager = null;
    }

    init() {
        this.menubar = new MenuBar();
        this.stateManager = new StateManager(this.menubar);
        this.appManager = new AppManager();
        
        this.initializeEventListeners();
    }

    // Initialize desktop and event listeners
    initializeEventListeners() {

        // Global click handler
        document.addEventListener('click', (e) => this.handleGlobalClick(e));

        // Global key handlers
        document.addEventListener('keydown', (e) => this.handleGlobalKeydown(e));

        // Save state before page unload
        window.addEventListener('beforeunload', () => this.handleBeforeUnload());

    }

    handleGlobalClick(e) {
        // This method can be used for any additional global click handling if needed
        // Handle menu closing
        if (!e.target.closest('.menubar-item') && !e.target.closest('.dropdown-menu')) {
            this.menubar.closeAllMenus();
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

            this.menubar.resetApplicationName();
        }

        const window = e.target.closest('.window');
        if (window) {
            Array.from(document.querySelectorAll('.window')).forEach(w => {
                if (w !== window) {
                    w.classList.remove('active');
                }
            });
            window.classList.add('active');
        }

        if (e.target.matches('.window-close')) {
            const appId = e.target.closest('.window').dataset.appId;
            if (appId) {
                this.appManager.closeApp(appId);
            }
        }
    }

    handleGlobalDblClick(e) {
        const icon = e.target.closest('.desktop-icon');
        if (!icon) return;

        const name = icon.dataset.name;
        const type = icon.dataset.type;

        if (type === 'folder') {
            this.appManager.openApp('finder_app');
        }
        else if (type === 'alias') {
            if (name === 'Frank') {
                this.appManager.openApp('frank_app');
            }
            else if (name === 'Trash') {
                this.appManager.openApp('trash_app');
            }
            
        }
    }

    handleGlobalKeydown(e) {
        // Add key shortcuts here if needed
        if (e.key === 'Escape') {
            this.menubar.closeAllMenus();
        }
    }

    handleBeforeUnload(e) {
        this.stateManager.saveState();
    }

    cleanup() {
        // Clean up any global event listeners or intervals if needed
        document.removeEventListener('click', this.handleGlobalClick);
        document.removeEventListener('dblclick', this.handleGlobalDblClick);
        document.removeEventListener('keydown', this.handleGlobalKeydown);
        document.removeEventListener('beforeunload', this.handleBeforeUnload);

        // TODO: cleanup any intervals. call cleanup on all referenced objects
    }
}
