import { getImagePath } from '../assets.js';

export function setImage(card, src) {
  const fullSrc = getImagePath(src);

  if (card._currentImage === fullSrc) return;

  card.el.image.src = fullSrc;
  card._currentImage = fullSrc;
}