const base = document.querySelector("#base");
const height = document.querySelector("#height");

const button = document.querySelector("#button");
const output = document.querySelector("#output");

function calculateArea(a, b) {
  var area = (a * b) / 2;
  output.innerText = "The Area of Triangle is " + area.toFixed(2);
}

function areaOfTriangle() {
  if (base.value === "" || height.value === "")
    output.innerText = "Please enter both values";
  else if (Number(base.value <= 0) || Number(height.value <= 0))
    output.innerText = "Both values should be greater than zero";
  else calculateArea(Number(base.value), Number(height.value));
}

button.addEventListener("click", areaOfTriangle);
