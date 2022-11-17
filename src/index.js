import refreshScoresTab from './renders/refreshScoresTab.js';
import './style.css';

document.addEventListener('DOMContentLoaded', refreshScoresTab);

document.querySelector('form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const user = formData.get('user');
  const score = formData.get('score');

  await fetch(`${process.env.BASE_URL}/games/${process.env.GAME_ID}/scores/`, {
    method: 'POST',
    body: JSON.stringify({ user, score }),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    },
  });

  event.target.reset();
});

document.querySelector('#refresh-scores').addEventListener('click', refreshScoresTab);
