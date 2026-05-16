import { IMAGES } from '../assets.js';
import { setImage } from './image.js';

export function startIdleCycle(card) {
  stopIdleCycle(card);

  const run = () => {
    setImage(card, IMAGES.smile[0]);

    card.idleTimer = setTimeout(run, 5000);
  };

  run();
}

export function stopIdleCycle(card) {
  if (card.idleTimer) {
    clearTimeout(card.idleTimer);
    card.idleTimer = null;
  }
}