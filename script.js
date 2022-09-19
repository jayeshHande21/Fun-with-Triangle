const angles = document.querySelectorAll(".angleinput");
const button = document.querySelector("button");

const dom = document.querySelector("#output");

function isTriangle() {
  const sumOfAngles = calculateSum(
    Number(angles[0].value),
    Number(angles[1].value),
    Number(angles[2].value)
  );

  if (sumOfAngles === 180) {
    dom.innerText = "Yes!! Angles form a triangle";
  } else {
    dom.innerText = "NO!! Angles don't form a triangle";
  }
}

function calculateSum(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

button.addEventListener("click", isTriangle);
