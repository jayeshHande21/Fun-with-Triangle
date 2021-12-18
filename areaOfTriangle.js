const base = document.querySelector("#base");
const height = document.querySelector("#height");

const button = document.querySelector("#button");
const output = document.querySelector("#output");

function heightBase(a,b){
 const temp = a * b ;
 return temp;

}

function areaOfTriangle(){
    const sum = heightBase(Number(base.value) , Number(height.value));
    const area = 1/2 * sum ;
    output.innerText = "sum of the area is " + area ;
}

button.addEventListener("click", areaOfTriangle)