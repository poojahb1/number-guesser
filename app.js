//game values
let min=1, max=10, winningNum=Math.floor(Math.random()*(max-min+1)+min), guessesLeft=3;
//UI vars
let game = document.querySelector("#game"),
    minNum = document.querySelector(".min-num"),
    maxNum = document.querySelector(".max-num"),
    guessBtn = document.querySelector("#guess-btn"),
    guessInput = document.querySelector("#guess-input"),
    message = document.querySelector(".message");

//assign UI min max
minNum.textContent = min;
maxNum.textContent = max;

//play again event listener
game.addEventListener("mousedown", function(e){
    if(e.target.className === "play-again"){
        window.location.reload();
    }
})

//listen for guess
guessBtn.addEventListener("click", function(){
    let guess = parseInt(guessInput.value);

    //validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, "red");
    }

    //won
    if(guess === winningNum){
        gameOver(true);

        //wrong number
    }else{
        guessesLeft--;
        if(guessesLeft === 0){
            //set message game lost
            gameOver(false);
        }else{
            //guess wrong game continues 
                //clear input
                guessInput.value = ""
                //change border color
                guessInput.style.borderColor = "red";
                //set message
                setMessage(`${guess} is not correct, ${guessesLeft} guesses left`,"red");
        }
    }
})

//set message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

//game over
function gameOver(won){
    //disable input
    guessInput.disabled = true;
    if(won === true){
        //change border color
        guessInput.style.borderColor = "green";
        //set message
        setMessage(`${winningNum} is correct, YOU WON`,"green");
    }else{
        //change border color
        guessInput.style.borderColor = "red";
        //set message
        setMessage(`Game Over YOU LOST, the correct number was ${winningNum}`,"red");
    }
    //play again
    guessBtn.value = "Play Again";
    guessBtn.className += "play-again";
}

//play again
function playAgain(){
    guessBtn.textContent = "Play Again";
    guessBtn.addEventListener("click", window.location.reload());
}