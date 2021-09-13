let rulesButton = document.querySelector('.ru');
let rules = document.querySelector('.rules');
rulesButton.onclick = () => {
  rules.classList.toggle('show');
};
let option = document.querySelectorAll('.container > div > div');
let container = document.querySelector('.container');
let choiceComputer = ['scissors', 'paper', 'rock', 'lizard', 'spock'];
let whenChoice = document.querySelector('.when-choice');
let containerResult = document.querySelector('.result');
let yourResult = document.querySelector('.result h1');
let playAgain = document.querySelector('.result button');
let yourScore = document.querySelector('.head div span:last-of-type');
var i = 0;
option.forEach((el, ind) => {
  el.onclick = () => {
    var choice = el.getAttribute('data-content');
    container.classList.add('stepTwo');
    whenChoice.classList.add('stepTwo');
    let random = Math.floor(Math.random() * choiceComputer.length);
    let toShow = `
      <div class="${choice}">
        <div>
          <img src="./images/icon-${choice}.svg" alt="icon ${choice}" />
        </div>
      </div>
      <div class="sp"></div>
      <div class='par'>
        <p>You Picked</p> 
        <p>The House Picked</p>
      </div>
    `;
    whenChoice.innerHTML = toShow;
    setTimeout(() => {
      let result = checkResult(choice, choiceComputer[random]);
      containerResult.classList.add('final');
      if (result === 'lose') {
        yourResult.innerHTML = 'You Lose';
        i -= 1;
        toShow = `
          <div class="${choice}">
            <div>
             <img src="./images/icon-${choice}.svg" alt="icon ${choice}" />
            </div>
          </div>
          <div class="${choiceComputer[random]} res">
            <div>
              <img src="./images/icon-${choiceComputer[random]}.svg" alt="icon ${choiceComputer[random]}" />
            </div>
          </div>
          <div class='par'>
            <p>You Picked</p> 
            <p>The House Picked</p>
          </div>
        `;
      } else if (result === 'win') {
        yourResult.innerHTML = 'You Win';
        i += 1;
        toShow = `
          <div class="${choice} res">
            <div>
              <img src="./images/icon-${choice}.svg" alt="icon ${choice}" />
            </div>
          </div>
          <div class="${choiceComputer[random]}">
            <div>
              <img src="./images/icon-${choiceComputer[random]}.svg" alt="icon ${choiceComputer[random]}" />
            </div>
          </div>
          <div class='par'>
            <p>You Picked</p> 
            <p>The House Picked</p>
          </div>
        `;
      } else {
        yourResult.innerHTML = 'You equal';
        toShow = `
          <div class="${choice}">
            <div>
              <img src="./images/icon-${choice}.svg" alt="icon ${choice}" />
            </div>
          </div>
          <div class="${choiceComputer[random]}">
            <div>
              <img src="./images/icon-${choiceComputer[random]}.svg" alt="icon ${choiceComputer[random]}" />
            </div>
          </div>
          <div class='par'>
            <p>You Picked</p> 
            <p>The House Picked</p>
          </div>
        `;
      }
      if (i < 0) {
        i = 0;
      }
      yourScore.textContent = i;
      whenChoice.innerHTML = toShow;
    }, 2000);
    playAgain.onclick = () => {
      container.classList.remove('stepTwo');
      whenChoice.classList.remove('stepTwo');
      containerResult.classList.remove('final');
    };
  };
});

function checkResult(user, computer) {
  if (user === 'paper') {
    if (computer === 'scissors' || computer === 'lizard') {
      return 'lose';
    } else if (computer === 'rock' || computer === 'spock') {
      return 'win';
    } else {
      return `equal`;
    }
  } else if (user === 'rock') {
    if (computer === 'paper' || computer === 'spock') {
      return 'lose';
    } else if (computer === 'scissors' || computer === 'lizard') {
      return 'win';
    } else {
      return `equal`;
    }
  } else if (user === 'scissors') {
    if (computer === 'rock' || computer === 'spock') {
      return 'lose';
    } else if (computer === 'paper' || computer === 'lizard') {
      return 'win';
    } else {
      return `equal`;
    }
  } else if (user === 'lizard') {
    if (computer === 'rock' || computer === 'scissors') {
      return 'lose';
    } else if (computer === 'spock' || computer === 'paper') {
      return 'win';
    } else {
      return 'equal';
    }
  } else if (user === 'spock') {
    if (computer === 'lizard' || computer === 'paper') {
      return 'lose';
    } else if (computer === 'scissors' || computer === 'rock') {
      return 'win';
    } else {
      return 'equal';
    }
  }
}