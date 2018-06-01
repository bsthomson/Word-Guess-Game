    var words = ["dog", "cat", "pig", "fog", "sad"];
    var guessInput = document.getElementById("guess");
    var guessOutput = document.getElementById("Wrong-Guess");
    var word;
    var answerArray = [];
    
    function init() {
        word = words[Math.floor(Math.random() * words.length)]
        answerArray = [];
        for (var i = 0; i < word.length; i++) {
            answerArray[i] = "_";
        }
        document.getElementById("Word-Space").innerHTML = answerArray.join(" ");
    }
    
    

        
   function checkGuess() {
       var guess = document.getElementById("guess").value;
       var showThisMessage = "";
            
    }
    if (guess.length !== 1) {
        showThisMessage = "Please enter only a single letter";
    } else { 
        var j=0;
        for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            answerArray[j] = guess;
            showThisMessage = "Good job. " + guess + "is right.";
        }
        var remaining_letters = answerArray.length;
        for (i = 0; i < answerArray.length; i++) {
            if (answerArray[i] !== '_') {
                remaining_letters -= 1;
            }
        }
        if (remaining_letters == 0) {
            showThisMessage = "Good job";
        }
        if (showThisMessage === "") {
            showThisMessage = "Absolutely no "+guess;
        }
            document.getElementById("answer").innerHTML = answerArray.join(" ");
            document.getElementById("guess").value = "";
        }
        document.getElementById("message").innerHTML = showThisMessage;
    }


    document.getElementById("Victory-Status").innerHTML = answerArray.join(" ");
        document.getElementById("Victory-Status").innerHTML = "Good job! The answer was " + word;

