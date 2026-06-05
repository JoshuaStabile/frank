import { MenuBar } from './MenuBar.js';
import { Window } from './Window.js';

export class StateManager {
    constructor(menubar) {
        this.menubar = menubar;
        this.STATE_KEY = 'frankOS_State';
        this.AUTO_SAVE_INTERVAL = 5000; // Auto-save every 5 seconds
        
        this.loadState();
        this.startAutoSave();

    }

    saveState() {
        try {
            // Capture all open windows
            const windows = Array.from(document.querySelectorAll('.window')).map(window => ({
                title: window.querySelector('.window-title').textContent,
                content: window.querySelector('.window-content').innerHTML,
                type: window.dataset.windowType || (window.classList.contains('folder-window') ? 'folder' : 'document'),
                position: {
                    left: window.style.left,
                    top: window.style.top,
                    width: window.style.width,
                    height: window.style.height,
                    zIndex: window.style.zIndex
                }
            }));

            // Capture desktop state
            const desktop = {
            };

            // Capture menu state
            const menuState = {
                activeApp: document.querySelector('.app-menu').textContent,
            };

            const state = {
                windows,
                desktop,
                menuState,
                lastSaved: new Date().toISOString()
            };

            localStorage.setItem(this.STATE_KEY, JSON.stringify(state));
        } catch (error) {
            console.error('Error saving state:', error);
        }
    }

    loadState() {
        try {
            const savedState = localStorage.getItem(this.STATE_KEY);
            if (!savedState) return;

            const state = JSON.parse(savedState);

            // Restore desktop background
            const desktop = document.getElementById('desktop');
            if (desktop) {
            }

            // Restore menu state
            if (state.menuState) {
                const activeApp = state.menuState.activeApp;
                if (activeApp && activeApp !== 'Desktop') {
                    this.menubar.setApplicationName(activeApp);
                }
                else {
                    this.menubar.resetApplicationName();
                }
            }

            // Restore windows
            state.windows.forEach(windowState => {
                new Window(
                    windowState.title,
                    windowState.content,
                    windowState.type,
                    parseInt(windowState.position.left) || 100,
                    parseInt(windowState.position.top) || 100
                );
            });
        } catch (error) {
            console.error('Error loading state:', error);
            // If there's an error loading state, remove the corrupted state
            localStorage.removeItem(this.STATE_KEY);
        }
    }

    startAutoSave() {
        // Clear any existing auto-save interval
        if (this.autoSaveInterval) {
            clearInterval(this.autoSaveInterval);
        }
        
        // Start new auto-save interval
        this.autoSaveInterval = setInterval(() => this.saveState(), this.AUTO_SAVE_INTERVAL);
    }

    clearState() {
        localStorage.removeItem(this.STATE_KEY);
    }
};