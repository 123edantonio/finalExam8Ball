document.addEventListener('DOMContentLoaded', () => {

  // 1. create a variable called magic8Ball and set it equal to an empty object
  var magic8Ball = Object.create()
  // 2. set the line of code below equal to an array of 5 different answers
  magic8Ball.listOfAnswers = ['yes', 'no', 'sometimes', 'maybe', 'soon'];

  // 3. hide the answer element
  magic8Ball.askQuestion = function(question) {
    var magic8Ball = document.getElementById("answer");
    if (magic8Ball.style.display === "none") {
      magic8Ball.style.display = "block";
    }
    else {
      magic8Ball.style.display = "none";
    }
  }
  // 4. trigger shake animation
  document.getElementById("8ball").style.animation = "shake";
  // 5. change image to answer.png
  changeImage() = document.getElementById("8ball").innerHTML;
  function changeImage() {
            var image = document.getElementById('8ball');
            if (image.src.match("question")) {
                image.src = "answer.png";
            }
            else {
                image.src = "question.png";
            }
        }
  // 6. fade in the answer

  var randomNumber = Math.random();
  var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
  var randomIndex = Math.floor(randomNumberForListOfAnswers);
  var answer = this.listOfAnswers[randomIndex];
  var opacity = 0;
  var intervalID = 0;
  window.onload = fadeIn;
  function fadeIn() {
    setInterval(show, 200);
  }
  function show() {
    answer = document.getElementById("answer");
    opacity = Number(window.getComputedStyle(answer)
      .getPropertyValue("opacity"));
    if (opacity < 1) {
      opacity = opacity + 0.1;
      answer.style.opacity = opacity
    } else {
      clearInterval(intervalID);
    }
  }
  // 7. set the answer element's text to the answer variable
  var onClick = function() {
    document.getElementById(questionButton)
    onClick = document.getElementById(answer)
    answer = magic8Ball.listOfAnswers
    // 8. hide the answer element
  var answer = document.getElementById("answer");
    if (answer.style.display === "none"){
      answer.style.display = "block";
    }
    else {
      answer.style.display = "none";
    }
    // 9. change the image back to question.png
    changeImage() = document.getElementById("8ball").innerHTML;
    function changeImage() {
            var image = document.getElementById('8ball');
            if (image.src.match("answer")) {
                image.src = "question.png";
            }
            else {
                image.src = "answer.png";
            }
        }
    
    setTimeout(function() {
      var question = prompt("ASK A YES/NO QUESTION!");
      magic8Ball.askQuestion(question);
    }, 500);

  // 10. add a click handler on the question button that calls the function onClick
  document.getElementById("questionButton").addEventListener("click", onClick);

  }