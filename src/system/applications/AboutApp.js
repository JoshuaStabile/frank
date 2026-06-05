import { App } from './App.js';
import { Window } from '../Window.js';

export class AboutApp extends App {

    constructor(root) {
        const id = 'about_app';

        const content = `
            <div style="display: flex; align-items: center;">
                <img src="/assets/images/moof.png" alt="Moof" style="width: 64px; height: 64px; margin-right: 20px;">
                <div>
                    <p>Frank OS</p>
                </div>
            </div>
        `;

        super(root, id, new Window(id, 'About', content, 'about', window.innerWidth / 2 - 200, window.innerHeight / 2 - 150));
    }

}