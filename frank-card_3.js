import { FrankCard } from './src/FrankCard.js';
import { FrankCardEditor } from './src/FrankCardEditor.js';

customElements.define('frank-card', FrankCard);
customElements.define('frank-card-editor', FrankCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'frank-card',
  name: 'Frank Custom Card',
  preview: true,
  description: 'Animated Frank assistant card'
});