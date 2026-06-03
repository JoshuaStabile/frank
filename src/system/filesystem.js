import { Window } from './Window.js';
import { openPage } from './Window.js';

// File System Structure
export class FileManager {

    constructor() {
        this.fileSystem = {
            'Macintosh HD': {
                type: 'folder',
                icon: 'hd-icon.png',
                contents: {
                }
            }
        };

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
        if (name === 'Access main security grid') {
            const videoContent = `
            <video width="200" height="200" autoplay loop>
                <source src="/assets/video/TheKing.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
            const jpWindow = new Window('The King', videoContent, 'document',
                window.innerWidth / 2 - 115,
                window.innerHeight / 2 - 125);
            jpWindow.element.style.width = '230px';
            jpWindow.element.style.height = '250px';
            jpWindow.element.style.resize = 'none';
            const resizeHandle = jpWindow.element.querySelector('.window-resizer');
            if (resizeHandle) {
                resizeHandle.remove();
            }
            return;
        }

        if (name === 'Macintosh HD') {
            const hdFolder = fileSystem['Macintosh HD'];
            new Window(name, createFolderContents(hdFolder), 'folder');
            return;
        }

        // Look for the item in the file system
        const item = findItem(fileSystem['Macintosh HD'], name);

        if (item) {
            if (item.type === 'folder') {
                new Window(name, createFolderContents(item), 'folder');
            } else if (item.type === 'document') {
                openPage(item.file);
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
                openPage(fileMap[name]);
            } else if (name === 'JP') {
                const videoContent = `
                <video width="200" height="200" autoplay loop>
                    <source src="/assets/videos/TheKing.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;
                new Window('TheKing', videoContent, 'document', window.innerWidth / 2 - 100, window.innerHeight / 2 - 100);
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