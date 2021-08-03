const formTriangle = document.querySelector('#formForTriangle');
const inputAngles = document.querySelectorAll('.inputAngle');
const output = document.querySelector('.output');

let angles = [];

document.addEventListener('submit', formTriangleHandler);

function formTriangleHandler(e) {
  e.preventDefault();
  output.style.display = 'block';
  for (i = 0; i < inputAngles.length; i++) {
    angles[i] = Number(inputAngles[i].value);
  }

  let sum = 0;
  angles.map((angle) => {
    sum = sum + angle;
  });

  if (sum === 180) {
    output.innerText = 'Amazing! Angles you entered form a triangle.';
  } else {
    output.innerText = 'Sorry! Angles you entered cannot form a triangle';
  }
}
