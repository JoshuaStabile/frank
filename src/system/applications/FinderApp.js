import { App } from './App.js';
import { Window } from '../Window.js';

// File System Structure
export class FinderApp extends App {

    constructor(root) {
        const id = 'finder_app';

        super(root, id, new Window(id, 'Finder', ``));


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
    

};