const angles = document.querySelectorAll(".angleinput")
const button = document.querySelector("button");

const dom = document.querySelector("#output");

function isTriangle(){
    console.log("clicked")
    const sumOfAngles = calculateSum(Number(angles[0]),Number(angles[1]),Number(angles[2]));
    if(sumOfAngles === 180){
        dom.innerText = "Yes its form a triangle"
    }
    else{
        dom.innerText = "no its  not form a triangle"
    }
}

function calculateSum(angle1,angle2,angle3){
    const sum =  angle1+ angle2+angle3;
    return sum;
}

button.addEventListener("click",isTriangle)