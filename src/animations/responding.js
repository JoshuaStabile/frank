import { IMAGES } from '../assets.js';
import { getImage, setImage } from './image.js';

export function startIdleCycle(card) {
  stopIdleCycle(card);

  const run = () => {
    if (getImage(card) !== getImagePath(IMAGES.neutral[0])) {
      setImage(card, IMAGES.neutral[0]);
    } else {
      setImage(card, IMAGES.jibjab[Math.floor(Math.random() * IMAGES.jibjab.length)]);
    }

    card.respondTimer = setTimeout(run, 500);
  };

  run();
}

export function stopIdleCycle(card) {
  if (card.respondTimer) {
    clearTimeout(card.respondTimer);
    card.respondTimer = null;
  }
}