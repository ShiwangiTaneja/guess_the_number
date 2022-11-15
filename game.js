var myNum;
var msg = document.getElementById('msg');
var noOfGuess = 0;
var btnPlay = document.getElementById('play');
var btnPlayAgain = document.getElementById('play_again');

generateRandomNum();

// ===== GENERATE RANDOM NUMBER =====

function generateRandomNum(){
    myNum = Math.floor(Math.random()*100)+1;
}

// ===== HANDLE ALL INPUTS =====

function play(){
    var inputNum = Number(document.getElementById('input_number').value);

    // ===== IF INPUT IS OUT OF RANGE (1-100)

    if(inputNum < 1 || inputNum > 100){
        alert("Please Enter a number Between 1 to 100");
    }

    else{
        document.getElementById('no_of_guesses').textContent = ++noOfGuess;

        // ===== IF THE GUESSED NUMBER IS LARGER =====

        if(inputNum > myNum){
            if(inputNum - myNum > 10){
                msg.textContent = "Your guess is Too High!!";
                msg.style.color = "red";   
            }else{
                msg.textContent = "Little High, you are closer!!";
                msg.style.color = "coral";
            }
        }

        // ===== IF THE GUESSED NUMBER IS SMALLER =====

        else if(inputNum < myNum){
            if(myNum - inputNum > 10){
                msg.textContent = "Your guess is Too Low";
                msg.style.color = "red";
            }else{
                msg.textContent = "Little Low, you are closer!!";
                msg.style.color = "coral";
            }
        }

        // ===== IF THE GUESSED NUMBER IS RIGHT =====

        else{
            msg.textContent = "Yeah! You guessed it right!🏆";
            msg.style.color = "green";
            btnPlay.style.display = "none";
            btnPlayAgain.style.display = "inline";
        }
    }
}