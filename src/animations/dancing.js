export function startDanceCycle(card, bpm) {
  stopDanceCycle(card);

  const beatMs = (60 / bpm) * 1000;

  const step = () => {
    if (card._currentState !== 'dancing') return;

    // animation logic here

    card.danceTimer = setTimeout(step, beatMs);
  };

  step();
}

export function stopDanceCycle(card) {
  if (card.danceTimer) {
    clearTimeout(card.danceTimer);
    card.danceTimer = null;
  }
}