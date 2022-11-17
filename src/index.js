import refreshScoresTab from './renders/refreshScoresTab.js';
import renderScore from './renders/scoreRow.js';
import './style.css';

document.addEventListener('DOMContentLoaded', refreshScoresTab);

document.querySelector('form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const user = formData.get('user');
  const score = formData.get('score');

  const scoreTab = document.querySelector('#scores-tab');

  await fetch(`${process.env.BASE_URL}/games/${process.env.GAME_ID}/scores/`, {
    method: 'POST',
    body: JSON.stringify({ user, score }),
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    },
  });

  if (scoreTab.childElementCount === 0) {
    scoreTab.innerHTML = '';
    scoreTab.classList.remove('empty-scores-tab');
  }

  scoreTab.prepend(renderScore({ user, score }));

  event.target.reset();
});

document.querySelector('#refresh-scores').addEventListener('click', refreshScoresTab);
