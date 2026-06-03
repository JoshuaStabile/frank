export class WindowManager {
    constructor() {
        this.windows = [];
    }


    // Add this function to update the application name
    updateActiveApplication(windowTitle) {
        const appName = document.getElementById('current-app-name');
        if (appName) {
            appName.textContent = windowTitle || 'Finder';
        }
    }

    // Find the function that handles window focus and add the update call
    // This might be in your window click handler or focus handler
    setActiveWindow(window) {
        // ...existing code...
        updateActiveApplication(window.querySelector('.window-title').textContent);
        // ...existing code...
    }

    // Function to open a page in a new window
    openPage(page) {
        fetch(`/pages/${page}.html`)
            .then(response => response.text())
            .then(content => {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = content;
                const mainContent = tempDiv.querySelector('.main-content');
                const windowContent = mainContent ? mainContent.innerHTML : content;

                // Get the title from the filesystem
                const fileItem = findItem(fileSystem, page);
                const windowTitle = fileItem ? fileItem.name : page;

                // Create new window with proper title
                new Window(windowTitle, windowContent, 'document');
            })
            .catch(error => console.error('Error loading page:', error));
    }

}