export class AppManager {
    constructor () {
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
            registerApp(appId, new appClasses[appId]());
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