const firstAngle = document.querySelector('.firstAngle');
const secondAngle = document.querySelector('.secondAngle');
const guessAngle = document.querySelector('.guessAngle');
const output = document.querySelector('.output');
const formThirdAngle = document.querySelector('#formForThirdAngle');
const genAngle = document.querySelector('#generateAngles');

genAngle.addEventListener(`click`, generateAngle);
function generateAngle() {
  let x = Math.floor(Math.random() * 180);
  let y = Math.floor(Math.random() * 180);
  while (1) {
    if (x + y >= 180) {
      if (x > y) {
        x = Math.floor(Math.random() * 180);
      } else {
        y = Math.floor(Math.random() * 180);
      }
    } else {
      break;
    }
  }
  firstAngle.value = x;
  secondAngle.value = y;
}

formThirdAngle.addEventListener(`submit`, (e) => {
  e.preventDefault();
  guessAngles();
  function guessAngles() {
    let x = Number(firstAngle.value);
    let y = Number(secondAngle.value);
    let z = Number(guessAngle.value);
    if (x + y + z === 180) {
      output.style.display = 'block';
      output.innerHTML = `Yes, It is right Answer`;
    } else {
      output.style.display = 'block';
      output.innerHTML = `Sorry, It is wrong Answer`;
    }
  }
});
