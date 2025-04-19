const body = document.getElementsByTagName("body")[0];

function setColor(red) {
  document.body.style.backgroundColor = red;
  document.body.style.color = green;
}

function setFont(name) {
  body.style.color = name;
}

function randomColor() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  const color = `rgb(${red}, ${green}, ${blue})`
  body.style.backgroundColor = color;
}
