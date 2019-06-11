document.addEventListener('DOMContentLoaded', () => {

  main = document.querySelector('.main');

  score = 0;
  best = 0;
  time = 5;
  colours = ['red', 'yellow', 'green', 'blue', 'magenta', 'darkorange'];
  timer = 0;
  end = 0;
  currentLight = 0;

  addLightAndScoreZone();
  fillLightZone();
  fillScoreZone();


  function addLightAndScoreZone() {
    const lightAndScoreZone = document.createElement('div');
    lightAndScoreZone.className = 'lightAndScoreZone';
    main.appendChild(lightAndScoreZone);

    lightZone = document.createElement('div');
    lightZone.className = 'lightZone';
    lightAndScoreZone.appendChild(lightZone);

    scoreZone = document.createElement('div');
    scoreZone.className = 'scoreZone';
    lightAndScoreZone.appendChild(scoreZone);
  }

  function fillLightZone() {
    for (i=0; i<4; i++) {
      const row = document.createElement('div');
      row.className = 'row';
      row.id = `row${i}`;
      lightZone.appendChild(row);
      // const colours = ['red', 'yellow', 'green', 'blue', 'pink'];
      // row.style.backgroundColor = colours[i];
      addSpaces(row);
    }
  }

  function addSpaces(row) {
    for (j=0; j<5; j++) {
      const space = document.createElement('div');
      space.className = 'row';
      space.id = `space${i}${j}`;
      row.appendChild(space);
      // const colours = ['red', 'yellow', 'green', 'blue', 'pink', 'red', 'yellow', 'green', 'blue', 'pink', 'red', 'yellow', 'green', 'blue', 'pink', 'red', 'yellow', 'green', 'blue', 'pink'];
      // space.style.backgroundColor = colours[i+j];
      addDisc(space, i, j);
    }
  }

  function addDisc(space, i, j) {
    const disc = document.createElement('div');
    disc.className = 'disc';
    disc.id = `disc${i}${j}`;
    space.appendChild(disc);
  }

  function fillScoreZone() {
    const scoreSlot = document.createElement('div');
    scoreSlot.className = 'scoreZoneSlot';
    scoreSlot.id = 'scoreSlot'
    scoreZone.appendChild(scoreSlot);
    // scoreSlot.style.backgroundColor = 'red';

    const bestSlot = document.createElement('div');
    bestSlot.className = 'scoreZoneSlot';
    bestSlot.id = 'bestSlot'
    scoreZone.appendChild(bestSlot);
    // bestSlot.style.backgroundColor = 'yellow';

    const newSlot = document.createElement('div');
    newSlot.className = 'scoreZoneSlot';
    newSlot.id = 'newSlot'
    scoreZone.appendChild(newSlot);
    // newSlot.style.backgroundColor = 'green';

    const timeSlot = document.createElement('div');
    timeSlot.className = 'scoreZoneSlot';
    timeSlot.id = 'timeSlot'
    scoreZone.appendChild(timeSlot);
    // timeSlot.style.backgroundColor = 'blue';

    const scoreLabel = document.createElement('div');
    scoreLabel.id = 'scoreLabel';
    scoreLabel.textContent = 'Score';
    scoreSlot.appendChild(scoreLabel);

    const timeLabel = document.createElement('div');
    timeLabel.id = 'timeLabel';
    timeLabel.textContent = 'Time';
    timeSlot.appendChild(timeLabel);

    // const bestLabel = document.createElement('div');
    // bestLabel.id = 'bestLabel';
    // bestLabel.textContent = 'Best';
    // bestSlot.appendChild(bestLabel);

    const newButton = document.createElement('button');
    newButton.id = 'newButton';
    newButton.textContent = 'Start';
    newSlot.appendChild(newButton);
    newButton.addEventListener('click', () => {
      startGame();
    })

    const scoreValue = document.createElement('div');
    scoreValue.id = 'scoreValue';
    scoreValue.textContent = 0;
    scoreSlot.appendChild(scoreValue);

    // const bestValue = document.createElement('div');
    // bestValue.id = 'bestValue';
    // bestValue.textContent = 0;
    // bestSlot.appendChild(bestValue);

    const timeValue = document.createElement('div');
    timeValue.id = 'timeValue';
    timeValue.textContent = `${time}s`;
    timeSlot.appendChild(timeValue);
  }

  function startGame() {
    for (i=0; i<4; i++) {
      for (j=0; j<5; j++) {
        document.querySelector(`#disc${i}${j}`).style.backgroundColor = 'white';
      }
    }
    clearInterval(timer);
    clearTimeout(end);
    score = 0;
    time = 5;
    document.querySelector('#scoreValue').textContent = 0;
    document.querySelector('#newButton').textContent = 'New';
    document.querySelector('#timeValue').textContent = `${time}s`;
    turnOnRandomLight();
    timer = setInterval(reduceTime, 1000);
    end = setTimeout(endGame, time * 1000);
  }

  function turnOnRandomLight() {

    const randomI = Math.floor(Math.random() * 4);
    const randomJ = Math.floor(Math.random() * 5);
    const randomColourIndex = Math.floor(Math.random() * colours.length);

    document.querySelector(`#disc${randomI}${randomJ}`).style.backgroundColor = colours[randomColourIndex];
    document.querySelector(`#disc${randomI}${randomJ}`).addEventListener('click', makeValidLight);
    currentLight = document.querySelector(`#disc${randomI}${randomJ}`);
  }
  //
  // function startTimer() {
  //   // for (i=1; i<30; i++) {
  //   //   setTimeout(reduceTime, 1000 * i);
  //   // }
  //   setInterval(reduceTime, 1000);
  // }

  function reduceTime() {
    if (time > 0) {
      time --;
      document.querySelector('#timeValue').textContent = `${time}s`;
    }
  }

  function endGame() {
    clearInterval(timer);
    clearTimeout(end);
    currentLight.removeEventListener('click', makeValidLight);
    currentLight.style.backgroundColor = 'white';
    // document.querySelector('#timeValue').textContent = '0s';
  }

  function makeValidLight() {
    this.removeEventListener('click', makeValidLight);
    this.style.backgroundColor = 'white';
    score ++;
    document.querySelector('#scoreValue').textContent ++;
    turnOnRandomLight();
  }


})
