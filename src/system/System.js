import { MenuBar } from './MenuBar.js';
import { Desktop } from './Desktop.js';
import { StateManager } from './StateManager.js';
import { AppManager } from './AppManager.js';

export class System {
    constructor(root) {
        this.root = root;
        this.menubar = new MenuBar(root);
        this.stateManager = new StateManager(root, this.menubar);
        this.appManager = new AppManager(root);
        this.desktop = new Desktop(root, this.appManager);
        
        this.initializeEventListeners();
    }

    // Initialize desktop and event listeners
    initializeEventListeners() {
        // Global click handler
        this.root.addEventListener('click', (e) => this.handleGlobalClick(e));

        // Global key handlers
        this.root.addEventListener('keydown', (e) => this.handleGlobalKeydown(e));

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
            this.root.querySelectorAll('.window').forEach(win => {
                win.classList.remove('active');
                win.style.zIndex = '1';
                win.querySelector('.window-titlebar').style.background =
                    'var(--system7-titlebar-inactive)';
            });

            this.menubar.resetApplicationName();
        }

        const window = e.target.closest('.window');
        if (window) {
            Array.from(this.root.querySelectorAll('.window')).forEach(w => {
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

        const appId = icon.dataset.appId;
        
        this.appManager.openApp(appId);
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
        this.root.removeEventListener('click', this.handleGlobalClick);
        this.root.removeEventListener('dblclick', this.handleGlobalDblClick);
        this.root.removeEventListener('keydown', this.handleGlobalKeydown);
        this.root.removeEventListener('beforeunload', this.handleBeforeUnload);

        // TODO: cleanup any intervals. call cleanup on all referenced objects
    }
}
