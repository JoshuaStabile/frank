export class Window {
    constructor(root, id, title, content, type = 'document', x = 20, y = 50) {
        this.root = root;
        this.element = this.root.createElement('div');
        this.element.className = 'window';
        if (type === 'folder') this.element.classList.add('folder-window');
        
        // Set initial position
        this.element.style.left = x + 'px';
        this.element.style.top = y + 'px';

        // Set size based on window type
        if (title === 'Macintosh HD') {
            this.element.style.width = '500px'; 
            this.element.style.height = '200px'; 
        } else if (type === 'document') {
            this.element.style.width = '800px';
            this.element.style.height = '600px';
        } else {
            this.element.style.width = '600px';
            this.element.style.height = '400px';
        }

        // Create window structure
        this.element.innerHTML = `
            <div class="window-titlebar" data-app-id="${id}">}">
                <div class="window-close"></div>
                <div class="window-title">${title}</div>
            </div>
            <div class="window-content">${content}</div>
            <div class="window-resizer"></div>
        `;

        // Set window type for menu handling
        this.element.dataset.windowType = type;

        // Initialize window behaviors
        this.makeDraggable();
        this.makeCloseable();
        this.makeActivatable();
        this.makeResizable();
        this.bringToFront();
    }

    makeActivatable() {
        this.element.addEventListener('mousedown', (e) => {
            if (!e.target.classList.contains('window-close')) {
                this.bringToFront();
            }
        });
        // Remove any desktop click handling from here
    }

    makeDraggable() {
        const titlebar = this.element.querySelector('.window-titlebar');
        let isDragging = false;
        let initialX, initialY;

        titlebar.addEventListener('mousedown', (e) => {
            isDragging = true;
            initialX = e.clientX - this.element.offsetLeft;
            initialY = e.clientY - this.element.offsetTop;
            this.bringToFront();
        });

        this.root.addEventListener('mousemove', (e) => {
            if (isDragging) {
                e.preventDefault();
                this.element.style.left = (e.clientX - initialX) + 'px';
                this.element.style.top = (e.clientY - initialY) + 'px';
            }
        });

        this.root.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
            }
        });
    }

    makeResizable() {
        const resizer = this.element.querySelector('.window-resizer');
        if (!resizer) return;

        resizer.addEventListener('mousedown', (e) => {
            e.preventDefault();
            const startWidth = this.element.offsetWidth;
            const startHeight = this.element.offsetHeight;
            const startX = e.clientX;
            const startY = e.clientY;
            
            const onMouseMove = (moveEvent) => {
                const newWidth = startWidth + (moveEvent.clientX - startX);
                const newHeight = startHeight + (moveEvent.clientY - startY);
                this.element.style.width = `${Math.max(200, newWidth)}px`;
                this.element.style.height = `${Math.max(100, newHeight)}px`;
            };
            
            const onMouseUp = () => {
                this.root.removeEventListener('mousemove', onMouseMove);
                this.root.removeEventListener('mouseup', onMouseUp);
            };
            
            this.root.addEventListener('mousemove', onMouseMove);
            this.root.addEventListener('mouseup', onMouseUp);
        });
    }

    makeCloseable() {
        const closeButton = this.element.querySelector('.window-close');
        closeButton.addEventListener('click', () => {
            this.close();
        });
    }

    bringToFront() {
        const windows = this.root.querySelectorAll('.window');
        let maxZ = 0;
        windows.forEach(win => {
            const z = parseInt(win.style.zIndex || 0);
            maxZ = Math.max(maxZ, z);
            win.classList.remove('active');
            win.querySelector('.window-titlebar').style.background = 
                'var(--system7-titlebar-inactive)';
        });
        
        this.element.style.zIndex = maxZ + 1;
        this.element.classList.add('active');
        this.element.querySelector('.window-titlebar').style.background = 
            'var(--system7-titlebar-active)';
    }

    close() {
        this.element.remove();
    }

    open() {
        this.root.getElementById('desktop').appendChild(this.element);
        this.bringToFront();
    }
}