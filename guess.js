const againButton = document.querySelector(".again");
const num = document.querySelector(".number");
const guess = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");

let random = Math.trunc(Math.random() * 20) + 1;
let scores = 20;
let maxScore = 0;
console.log(random);

const checkFunc = () => {
  const guessValue = Number(guess.value);  

  
  if (!guessValue) {
    message.textContent = "Not entered";
  } 
  
  else if (guessValue === random) {
    message.textContent = "Correct! 🎉";
    highscore.textContent = scores;
    document.querySelector("body").style.backgroundColor = "green";
    num.textContent = random;

    if (scores > maxScore) {
      maxScore = scores;
      highscore.textContent = maxScore;
    }
  } 
  else {
    if (scores > 1) {
      message.textContent = guessValue > random ? "Too high 📈" : "Too low 📉";
      scores--; 
      score.textContent = scores;
    } else {
      message.textContent = "💥 You lost the game!";
      score.textContent = 0;
    }
  }
};

checkBtn.addEventListener("click", checkFunc);
