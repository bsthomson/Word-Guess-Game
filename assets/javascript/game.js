    var words = ["dog", "cat", "pig", "fog", "sad"];

    var word = words[Math.floor(Math.random() * words.length)];

    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }

    var remainingLetters = word.length;

    while (remainingLetters > 0) {
        document.getElementById("wordSpace").innerHTML = answerArray.join(" ");
        var guess;
        document.getElementById("wordSpace").onkeyup = function() {
            
        }
        if (guess ===null) {
            break;
        } else if (guess.length !==1) {
            alert("Please enter a single letter.");
        } else {   
        };
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }

    document.getElementById("victoryStatus").innerHTML = answerArray.join(" ");
        document.getElementById("victoryStatus").innerHTML = "Good job! The answer was " + word;

