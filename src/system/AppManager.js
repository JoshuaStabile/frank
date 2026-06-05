import { AboutApp } from './applications/AboutApp.js';
import { FinderApp } from './applications/FinderApp.js';
import { FrankApp } from './applications/FrankApp.js';

export class AppManager {
    constructor (root) {
        this.root = root;
        this.apps = {};

        this.appClasses = {
            'about_app': AboutApp,
            'finder_app': FinderApp,
            'frank_app': FrankApp
        };
    }

    registerApp(appId, appInstance) {
        this.apps[appId] = appInstance;
    }

    openApp(appId) {
        if (!this.apps[appId]) {
            this.registerApp(appId, new this.appClasses[appId](this.root));
        }

        if (this.apps[appId]) {
            this.apps[appId].window.open();
        }
    }

    closeApp(appId) {
        if (this.apps[appId]) {
            this.apps[appId].window.close();
            delete this.apps[appId];
        } else {
            console.warn(`App with ID ${appId} not found.`);
        }
    }
}