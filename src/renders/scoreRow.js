export default (score, index) => {
  const row = document.createElement('div');
  row.innerHTML = `<div class="${index % 2 === 0 ? 'even-row' : 'odd-row'}">${score.user}: ${score.score}</div>`.trim();
  return row.firstChild;
};
