import renderScore from './scoreRow.js';

export default async () => {
  const scoreTab = document.querySelector('#scores-tab');

  const response = await fetch(`${process.env.BASE_URL}/games/${process.env.GAME_ID}/scores/`, {
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    },
  });

  scoreTab.classList.remove('empty-scores-tab');
  scoreTab.innerHTML = '';

  const scores = JSON.parse(await response.json()).result;
  scores.forEach((score) => scoreTab.append(renderScore(score)));
};
