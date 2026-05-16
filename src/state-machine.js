import { startIdleCycle, stopIdleCycle } from './animations/idle.js';
import { startDanceCycle, stopDanceCycle } from './animations/dance.js';
import { startRespondingCycle } from './animations/responding.js';

export function applyState(card, state, bpm) {
  stopIdleCycle(card);
  stopDanceCycle(card);
  stopRespondingCycle(card);

  switch (state) {
    case 'idle':
      startIdleCycle(card);
      break;

    case 'dancing':
      startDanceCycle(card, bpm);
      break;

    case 'responding':
      startRespondingCycle(card);
      break;

    case 'processing':
      break;

    case 'listening':
      break;
  }
}