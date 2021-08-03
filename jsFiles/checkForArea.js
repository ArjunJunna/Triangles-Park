const inputSides = document.querySelectorAll('.inputSide');
let A, B;
const formArea = document.querySelector('#formForArea');
const output = document.querySelector('.output');
formArea.addEventListener('submit', (e) => {
  e.preventDefault();
  output.style.display = 'block';
  A = Number(inputSides[0].value);
  B = Number(inputSides[1].value);

  output.innerText = 0.5 * A * B;
});
