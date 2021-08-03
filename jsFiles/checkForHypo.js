const inputSides = document.querySelectorAll('.inputSide');
let A, B;
const formHypotenuse = document.querySelector('#formForHypotenuse');
const output = document.querySelector('.output');
formHypotenuse.addEventListener('submit', (e) => {
  e.preventDefault();
  output.style.display = 'block';
  A = Number(inputSides[0].value);
  B = Number(inputSides[1].value);

  output.innerText = Math.sqrt(A * A + B * B);
});
