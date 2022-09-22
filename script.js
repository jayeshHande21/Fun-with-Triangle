const angle1 = document.querySelector("#angleinput1");
const angle2 = document.querySelector("#angleinput2");
const angle3 = document.querySelector("#angleinput3");
const button = document.querySelector("button");

const output = document.querySelector("#output");

function isTriangle() {
  if (angle1.value === "" || angle2.value === "" || angle3.value === "") {
    output.innerText = "Please enter all 3 values";
  } else if (
    Number(angle1.value <= 0) ||
    Number(angle2.value <= 0) ||
    Number(angle3.value <= 0)
  ) {
    output.innerText = "All values should be greater than zero";
  } else calculateSum();
}

function calculateSum() {
  const sumOfAngles =
    Number(angle1.value) + Number(angle2.value) + Number(angle3.value);
  if (sumOfAngles === 180) output.innerText = "Yayy!! Angles form the triangle";
  else
    output.innerText =
      "Angles don't form the triangle , sum of angles must be equal to 180";
}

button.addEventListener("click", isTriangle);
