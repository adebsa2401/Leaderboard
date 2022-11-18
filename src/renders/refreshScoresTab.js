import renderScore from './scoreRow.js';

export default async () => {
  const scoreTab = document.querySelector('#scores-tab');

  const response = await fetch(`${process.env.BASE_URL}/games/${process.env.GAME_ID}/scores/`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    },
  });

  const obj = await response.json();
  const scores = obj.result;

  if (scores.length > 0) {
    scoreTab.classList.remove('empty-scores-tab');
    scoreTab.innerHTML = '';
    scores.forEach((score, index) => scoreTab.append(renderScore(score, index)));
  } else {
    scoreTab.classList.add('empty-scores-tab');
    scoreTab.innerHTML = 'No scores available';
  }
};
