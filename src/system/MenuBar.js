export class MenuBar {
    constructor() {
        this.renderContent();
        this.resetApplicationName();
        this.initializeClock();
    }

    renderContent() {
        return `
            <div class="menubar-left">
                <div class="menubar-item" data-menu="apple">
                    <!-- svg 12x12-->
                </div>
                <div class="menubar-item" data-menu="file">File</div>
                <div class="menubar-item" data-menu="edit">Edit</div>
                <div class="menubar-item" data-menu="view">View</div>
                <div class="menubar-item" data-menu="special">Special</div>
            </div>
            <div class="menubar-right">
                <div class="weather" id="weather"></div>
                <div class="clock" id="clock"></div>
                <div class="menubar-item app-menu" data-menu="application">
                    <span class="app-name" id="current-app-name"></span>
                </div>
            </div>
        `;
    }

    setApplicationName(name) {
        const appNameElement = document.getElementById('current-app-name');
        if (appNameElement) {
            appNameElement.textContent = name;
        }
    }

    resetApplicationName() {
        this.setApplicationName('Desktop');
    }

    closeAllMenus() {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.style.display = 'none';
        });
    }

    // Clock functionality
    initializeClock() {
        this.updateClock();
        setInterval(() => this.updateClock(), 1000);
    }

    updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        document.getElementById('clock').textContent = `${hours}:${minutes}`;
    }

}