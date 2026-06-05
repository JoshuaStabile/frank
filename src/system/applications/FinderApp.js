// File System Structure
export class FinderApp extends App {

    constructor() {
        const id = 'finder_app';

        super(id, new Window(id, 'Finder', ``));
        this.fileSystem = {
            'Computer Chronicles': {
                type: 'folder',
                icon: 'hd-icon.png',
                contents: {
                }
            }
        };

        this.initializeDesktop();
    }


    // File system helper functions
    findItem(obj, searchName) {
        // Check direct contents first
        if (obj.contents && obj.contents[searchName]) {
            return obj.contents[searchName];
        }
        // If not found, search recursively through all folders
        for (const value of Object.values(obj.contents || {})) {
            if (value.contents) {
                const found = findItem(value, searchName);
                if (found) return found;
            }
        }
        return null;
    }

    createFolderContents(folder) {
        let html = '';
        Object.entries(folder.contents).forEach(([name, item]) => {
            html += `
            <div class="desktop-icon" data-type="${item.type}" data-name="${name}">
                <img src="/assets/images/${item.icon}" alt="${name}">
                <div class="desktop-icon-label">${name}</div>
            </div>
        `;
        });
        return html;
    }

    handleDoubleClick(name) {
        // Check for Access main security grid specifically 
        if (name === 'Macintosh HD') {
            const hdFolder = fileSystem['Macintosh HD'];
            this.windowManager.createWindow(name, createFolderContents(hdFolder), 'folder');
            return;
        }

        // Look for the item in the file system
        const item = findItem(fileSystem['Macintosh HD'], name);

        if (item) {
            if (item.type === 'folder') {
                this.windowManager.createWindow(name, createFolderContents(item), 'folder');
            } else if (item.type === 'document') {
                this.windowManager.openPage(item.file);
            }
        } else {
            // Check if it's an alias
            const fileMap = {
                'Bus Tracker Display': 'BusTideDisplay',
                'Isolated Thermocouple': 'IsoTherm',
                'Citicar': 'Citicar',
                'CAN Car Conversion': 'CANconversion'
            };

            if (fileMap[name]) {
                this.windowManager.openPage(fileMap[name]);
            }
        }
    }

    // Desktop initialization and icon management
    initializeDesktop() {
        const desktop = document.getElementById('desktop');
        const ICON_HEIGHT = 80;
        let topPosition = 20;

        // Add HD icon
        const hdIcon = createDesktopIcon(
            'Computer Chronicles',
            'hd-icon.png',
            false,
            { right: '20px', top: `${topPosition}px` }
        );
        desktop.appendChild(hdIcon);
        topPosition += ICON_HEIGHT;

        // Add aliases to main projects
        const projects = [
            { name: 'Frank', icon: 'frank_icon.png' },
            { name: 'Trash', icon: 'trash_icon.png' },
        ];

        projects.forEach((project) => {
            const icon = createDesktopIcon(
                project.name,
                project.icon,
                true,
                { right: '20px', top: `${topPosition}px` }
            );
            desktop.appendChild(icon);
            topPosition += ICON_HEIGHT;
        });
    }

    createDesktopIcon(name, icon, isAlias = false, position = {}) {
        const div = document.createElement('div');
        div.className = 'desktop-icon' + (isAlias ? ' alias' : '');
        Object.assign(div.style, position);

        div.innerHTML = `
        <img src="/assets/images/${icon}" alt="${name}">
        <div class="desktop-icon-label">${name}</div>
    `;

        div.setAttribute('data-name', name);
        div.setAttribute('data-type', isAlias ? 'alias' : 'folder');

        return div;
    }

};

// Event listeners
document.addEventListener('dblclick', (e) => {
    const icon = e.target.closest('.desktop-icon');
    if (!icon) return;

    const name = icon.dataset.name;
    handleDoubleClick(name);
});