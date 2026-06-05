import { AppManager } from './AppManager.js';

export class Desktop {
    constructor(root, appManager) {
        this.root = root;
        this.appManager = appManager;

        this.init();
    }


    // Desktop initialization and icon management
    init() {
        const desktop = this.root.getElementById('desktop');
        const ICON_HEIGHT = 80;
        let topPosition = 20;

        this.appManager.apps.forEach((app) => {
            const icon = this.createDesktopIcon(
                app.id,
                app.name,
                'application',
                app.icon,
                { right: '20px', top: `${topPosition}px` }
            );
            desktop.appendChild(icon);
            topPosition += ICON_HEIGHT;
        });
    }

    createDesktopIcon(appId, name, type, icon, position = {}) {
        const div = this.root.createElement('div');
        div.className = 'desktop-icon';
        Object.assign(div.style, position);

        div.innerHTML = `
            <img src="/assets/images/${icon}" alt="${name}">
            <div class="desktop-icon-label">${name}</div>
        `;

        div.setAttribute('data-appId', appId);
        div.setAttribute('data-name', name);
        div.setAttribute('data-type', type);

        return div;
    }

}