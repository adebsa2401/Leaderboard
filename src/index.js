import Score from './models/score.js';
import renderScore from './renders/scoreRow.js';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const scoreTab = document.querySelector('#scores-tab');
  const scores = Score.getAll();

  if (scores.length === 0) {
    scoreTab.classList.add('empty-scores-tab');
    scoreTab.innerHTML = 'No recent scores';
  } else {
    scoreTab.classList.remove('empty-scores-tab');
    scores.forEach((score) => {
      const row = renderScore(score);
      scoreTab.prepend(row);
    });
  }
});

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const name = formData.get('name');
  const score = formData.get('score');

  const scoreTab = document.querySelector('#scores-tab');
  if (scoreTab.childElementCount === 0) {
    scoreTab.innerHTML = '';
    scoreTab.classList.remove('empty-scores-tab');
  }
  scoreTab.prepend(renderScore(Score.add(name, score)));
  event.target.reset();
});

document.querySelector('#refresh-scores').addEventListener('click', () => {
  Score.removeAll();

  const scoreTab = document.querySelector('#scores-tab');
  Array.from(scoreTab.childNodes).forEach((node) => node.remove());
  scoreTab.classList.add('empty-scores-tab');
  scoreTab.innerHTML = 'No recent scores';
});
