document.addEventListener('DOMContentLoaded', () => {

  main = document.querySelector('.main');

  const lightAndScoreZone = document.createElement('div');
  lightAndScoreZone.className = 'lightAndScoreZone';
  main.appendChild(lightAndScoreZone);

  const lightZone = document.createElement('div');
  lightZone.className = 'lightZone';
  lightAndScoreZone.appendChild(lightZone);

  const scoreZone = document.createElement('div');
  scoreZone.className = 'scoreZone';
  lightAndScoreZone.appendChild(scoreZone);

})
