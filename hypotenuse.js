const sideInput = document.querySelectorAll(".side-input");
const button = document.querySelector("#button");
const output = document.querySelector("#output");


function calculateSumOfSquare(a,b){
    sumSquare = a*a + b*b;
   //  console.log(sumSquare)
   return sumSquare;
   }

function calculateHypo(){
    const sumOfSquare = calculateSumOfSquare(Number(sideInput[0].value),Number(sideInput[1].value))
    const squareRoot = Math.sqrt(sumOfSquare)
    output.innerText = "The length of the hypotenuse is " + squareRoot;

}



button.addEventListener("click", calculateHypo);