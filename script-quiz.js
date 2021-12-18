const quizform = document.querySelector(".container");

const button = document.querySelector("#submit-btn");

const output = document.querySelector(".output");

const correctAnswer = ["90°" , "right angled" , "equilateral triangle"];

function CalculateAnswer(){
    let score = 0;
    let index = 0;
    let formResults = new FormData(quizform); 
    for (let  value of formResults.values()){
      if(value === correctAnswer[index]){
          score = score + 1;
      }
      index = index + 1;
    }
    output.innerText = "Your Final Score Is   " + score ;
    
}



button.addEventListener("click" , CalculateAnswer)


