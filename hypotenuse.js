const sideInput1 = document.querySelector("#side-input1");
const sideInput2 = document.querySelector("#side-input2");
const button = document.querySelector("#button");
const output = document.querySelector("#output");

function calculateHypotenuse(a, b) {
  var hypotenuse = Math.sqrt(a ** 2 + b ** 2);
  output.innerText = "The length of hypotenuse is " + hypotenuse.toFixed(2);
}

function calculateHypo() {
  console.log(sideInput1.value);
  if (sideInput1.value === "" || sideInput2.value === "") {
    output.innerText = "Please enter both values";
  } else if (Number(sideInput1.value <= 0) || Number(sideInput2.value <= 0)) {
    output.innerText = "Both values should be greater than zero";
  } else
    calculateHypotenuse(Number(sideInput1.value), Number(sideInput2.value));
}

button.addEventListener("click", calculateHypo);
