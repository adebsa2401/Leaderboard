export default (score) => {
  const row = document.createElement('div');
  row.innerHTML = `<div>${score.user}: ${score.score}</div>`.trim();
  return row.firstChild;
};
