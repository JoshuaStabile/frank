import { FrankOSCard } from './FrankOSCard.js';
import { FrankOSCardEditor } from './FrankOSCardEditor.js';
import { STYLES } from './config/styles.js';

// #region Custom Element Registration

customElements.define('frank-card-editor', FrankOSCardEditor);
customElements.define('frank-card', FrankOSCard);

// #endregion

// #region Card Definition
window.customCards = window.customCards || [];
window.customCards.push({
  type: 'frank-card',
  name: 'Frank Custom Card',
  preview: true,
  description: 'A responsive, animated Frank AI assistant card that reacts to voice and dances to music.'
});
// #endregion

// add document styles
const styleElement = document.createElement('style');
styleElement.textContent = STYLES;
document.head.appendChild(styleElement);