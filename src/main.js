import { FrankCard } from './FrankCard.js';
import { FrankCardEditor } from './FrankCardEditor.js';

// #region Custom Element Registration

customElements.define('frank-card-editor', FrankCardEditor);
customElements.define('frank-card', FrankCard);

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