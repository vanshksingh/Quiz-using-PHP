// Function to retrieve URL parameters
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  
  // Get the subject parameter from the URL
  var subject = getParameterByName('subject');
  
  // Check if subject is null or not
  if (subject !== null) {
    console.log("Subject9:", subject);
    // Your code to handle the subject parameter goes here...
  } else {
    console.log("Subject parameter is null.");
  }
  
  // Initialize the current question index, score, high scores from local storage, quiz data, user name and selected option
  let currentQuestion = 0;
  let score = 0;
  let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  let quizData = [];
  let userName = "";
  let selectedOption = "";
  
  // Function to load quiz data from quizData.json file
  const loadQuizData = async () => {
    console.log("sharing11:",subject);
    const res = await fetch("start3.php?subject=" + encodeURIComponent(subject));
  
    // const res = await fetch("start2.php?subject=${subject}");
    // const res = await fetch("start.php");
    quizData = await res.json();
    console.log(quizData);
    loadQuestion();
  };
  
  // const loadQuizData = async () => {
  //   try {
  //     const res = await fetch("start.php");
  //     if (!res.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     const responseData = await res.text(); // Get response as text
  //     console.log(responseData); // Log the response text
  //     // Proceed with further processing if needed
  //   } catch (error) {
  //     console.error('Error fetching quiz data:', error);
  //   }
  // };
  
  
  
  
  // Function to load the current question and options
  const loadQuestion = () => {
    const questionObj = quizData[currentQuestion];
    document.getElementById("question").innerText = questionObj.question;
    for (let i = 0; i < 4; i++) {
      const btn = document.getElementById(`btn${i}`);
      btn.innerText = questionObj.options[i];
      btn.className = "option-btn";
      btn.disabled = false;
      btn.style.opacity = 1;
      btn.style.cursor = "default";
    }
    document.getElementById("message").innerText = "";
    document.getElementById("next-btn").style.display = "none";
  };
  
  // Function to start the quiz, get the username and display the quiz container
  const startQuiz = () => {
    
    document.getElementById("heading").style.display = "none";
    document.getElementById("content").style.display = "none"; // Hide instruction block
    document.getElementById("score-container").style.display = "block"; // Show header
    document.getElementById("quiz-container").style.display = "block";
  
    document.getElementById("final-score").innerText = 0;
  
    const highScore = Math.max(...highScores.map((item) => item.score), score);
    document.getElementById("final-high-score").innerText = highScore;
    loadQuizData();
  };
  
  
// Function to end the quiz, hide quiz container, display score, and store high scores in local storage
const endQuiz = () => {
    // Remove the display: none; property from the score container
    document.getElementById("score-container").style.display = "flex";

    const element = document.getElementById('score-container');
    element.style.top = '50%';
    const container = document.querySelector('.ref');
    container.classList.add('active');

    document.getElementById("return-home-btn").style.display = "block";
    document.getElementById("quiz-container").style.display = "none";
    // document.getElementById("score-container").style.display = "block"; // This line is not needed anymore
    document.getElementById("final-score").innerText = score;

    const highScore = Math.max(...highScores.map((item) => item.score), score);
    document.getElementById("final-high-score").innerText = highScore;
    highScores.push({
        username: userName,
        score: score,
        date: new Date().toISOString(),
    });
    highScores.sort((a, b) => new Date(b.date) - new Date(a.date));
    localStorage.setItem("highScores", JSON.stringify(highScores));

    // Store the score in the database
    sendScoreToServer(userName, subject, score);
};

  
  
  const hideSuperContainer = () => {
    const superContainers = document.querySelectorAll('.super-container');
    superContainers.forEach(container => {
        container.style.height="";
      container.style.display = 'none';
    });
  };
  
  
  // Function to show high scores page with all the scores from local storage
  const showHighscores = () => {
    hideSuperContainer();
    
    document.getElementById("content").style.display = "none";
    document.getElementById("instruction-block").style.display = "none"; // Hide instruction block
    document.getElementById("heading").style.display = "none";
    document.getElementById("highscore-page").style.display = "flex";

    // Make an AJAX request to fetch high scores from the server
    fetch('fetch_highscores.php')
        .then(response => response.json())
        .then(data => {
            // Check if there are any high scores returned
            if (data.length > 0) {
                // Display high scores
                document.getElementById("highscores").innerHTML = data
                    .map(item => `<p>${item.username}: ${item.score} (on ${new Date(item.date).toLocaleDateString()} at ${new Date(item.date).toLocaleTimeString()})</p>`)
                    .join("");
            } else {
                // No high scores available
                document.getElementById("highscores").innerHTML = "<h3>No Scores Yet!</h3><h4>Play the game to see your score's here.</h4>";
            }
        })
        .catch(error => {
            console.error('Error fetching high scores:', error);
            // Display error message
            document.getElementById("highscores").innerHTML = "<h3>Error fetching high scores. Please try again later.</h3>";
        });
};

  
  // Event listeners for Start Quiz button and View Highscores button
  document.getElementById("start-btn").addEventListener("click", startQuiz);
  document.getElementById("highscore-btn").addEventListener("click", showHighscores);
  
  // Event listener for Next Question button
  document.getElementById("next-btn").addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
      const progress = (currentQuestion / quizData.length) * 100;
      document.getElementById("progress-bar-fill").style.width = `${progress}%`;
      document.getElementById("progress-bar-text").innerText = `${Math.round(
        progress
      )}%`;
    } else {
      endQuiz();
    }
  });
  
  // Event listeners for the option buttons, updating score and showing whether the answer is correct or not
  for (let i = 0; i < 4; i++) {
    document.getElementById(`btn${i}`).addEventListener("click", (event) => {
      selectedOption = event.target;
      if (
        quizData[currentQuestion].options[i] === quizData[currentQuestion].answer
      ) {
        score++;
        document.getElementById("final-score").innerText = score;
        selectedOption.className = "option-btn correct";
        document.getElementById("message").innerText = " It's Correct Answer!";
      } else {
        selectedOption.className = "option-btn wrong";
        document.getElementById("message").innerText = "It's Wrong Answer!";
      }
      for (let j = 0; j < 4; j++) {
        document.getElementById(`btn${j}`).disabled = true;
        document.getElementById(`btn${j}`).style.cursor = "not-allowed";
        document.getElementById(`btn${j}`).style.opacity = 0.5;
      }
      selectedOption.style.opacity = 1;
      document.getElementById("next-btn").style.display = "block";
    });
  }
  
  // JavaScript code for the timer
  var timerValue = 100; // Timer duration in seconds
  var timerElement = document.getElementById("timer-value");
  var timerInterval;
  
  function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
  }
  
  function updateTimer() {
    timerValue--;
    timerElement.textContent = timerValue + "s";
  
    if (timerValue <= 0) {
      clearInterval(timerInterval);
      endQuiz(); // Show thank you message automatically when timer reaches 0
    }
  }
  
  // Call the startTimer function when the quiz starts
  document.getElementById("start-btn").addEventListener("click", function () {
      document.getElementById("skip-btn").style.display = "inline";
    startTimer();
  });
  // Event listener for Skip Question button
  document.getElementById("skip-btn").addEventListener("click", () => {
      // document.getElementById("skip-btn").style.display ="block";
      currentQuestion++;
      if (currentQuestion < quizData.length) {
        loadQuestion();
        const progress = (currentQuestion / quizData.length) * 100;
        document.getElementById("progress-bar-fill").style.width = `${progress}%`;
        document.getElementById("progress-bar-text").innerText = `${Math.round(progress)}%`;
      } else {
        endQuiz();
      }
    });
    
    // Event listener for Return to Home Page button
    document.getElementById("return-home-btn").addEventListener("click", () => {
      location.reload(); // Refresh the page to return to home page
    });
  
    document.getElementById("return-btn").addEventListener("click", () => {
      location.reload();
      // Additional logic if needed before returning to the home page
      // document.getElementById("start-page").style.display = "block";
    });
  
  
  
  
  // Function to show the overlay
  function showOverlay(event) {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "block";
  
    // Prevent the click event from propagating to the document
    event.stopPropagation();
  }
  
  // Function to close the overlay if clicked outside of the "subs-info" element
  document.addEventListener("click", function(event) {
    var overlay = document.getElementById("overlay");
    var subsInfo = document.querySelector(".subs-info");
    var isClickInsideSubsInfo = subsInfo.contains(event.target);
    if (!isClickInsideSubsInfo && overlay.style.display === "block") {
        closeOverlay();
    }
  });
  
  // Function to close the overlay
  function closeOverlay() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none";
  }
  
  
  
  
  
  
  
  document.getElementById("return-home-from-scoreboard-btn").addEventListener("click", () => {
    location.reload();
    // Additional logic if needed before returning to the home page
    // document.getElementById("start-page").style.display = "block";
  });




  const sendScoreToServer = (username, topic, score) => {
    const now = new Date();
    const dateAndTime = now.toISOString(); // Format date and time as ISO string
    const data = {
        username: username,
        topic: topic,
        score: score,
        dateAndTime: dateAndTime
    };

    fetch('store_score.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Score stored successfully:', data);
    })
    .catch(error => {
        console.error('Error storing score:', error);
    });
};
