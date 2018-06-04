    var availableWords = ["dog", "cats", "piggy", "tonsil", "blossom"];
    var guessInput = document.getElementById("guess");
    var guessOutput = document.getElementById("Wrong-Guess");
    var word = "";
    var answerArray = [];
    
    function init() {
        var random = Math.floor((Math.random() * 5));
        word = availableWords[random];
        answerArray = [];
        for (var i = 0; i < word.length; i++) {
            answerArray[i] = "_";
        }
        document.getElementById("Word-Space").innerHTML = answerArray.join(" ");
    }

    init();
     
   function checkGuess() {
       var guess = document.getElementById("guess").value;
       console.log(guess);
       var showThisMessage = " ";
    console.log(guess.length);       
    if (guess.length > 1) {
        showThisMessage = "Please enter only a single letter";
    } else { 
        // for (j = 0; j < word.length; j++) {
        //     console.log(word[j])
        //     console.log(guess)
        //     if (word[j] === guess) {
                if (word.indexOf(guess) !== -1) {
                    var indexGrab = word.indexOf(guess)
                    answerArray[indexGrab] = guess
                
        //         answerArray[j] = guess;
                    showThisMessage = "Good job. " + guess + " is right.";
                    console.log(answerArray);
                    document.getElementById("Word-Space").innerHTML = answerArray;
                }
        // }
        var remaining_letters = answerArray.length;
        for (i = 0; i < answerArray.length; i++) {
            if (answerArray[i] !== '_') {
                remaining_letters -= 1;
            }
        }
        if (remaining_letters == 0) {
            win();
        }
        if (guess !== " ") {
            // showThisMessage = "Its not "+guess;
            document.getElementById("answer").innerHTML = answerArray.join(guess);
            document.getElementById("guess").value = "";
        }
         document.getElementById("message").innerHTML = showThisMessage;
    }
}


    function win() {
        document.getElementById("Victory-Status").innerHTML = answerArray.join(" ");
        document.getElementById("Victory-Status").innerHTML = "Good job! The answer was " + word;
    }
