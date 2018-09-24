document.addEventListener("DOMContentLoaded", function () {
    // Shuffled and un-shuffled questions. Different than shuffled choices.
    let shuffled = [];
    let unShuffled = [];
    /**
     * Shuffles array in place.
     * @param {Array} array items An array containing the items.
     */
    function shuffle(array) {
        let counter = array.length;

        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            let index = Math.floor(Math.random() * counter);
            // Decrease counter by 1
            counter--;
            // And swap the last element with it
            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    }

    /**
     * Fade in the modal div.
     * @param {*} el The modal div element.
     * @param {*} time The amount of time it takes to fade in.
     */
    function fadeIn(el, time) {
        el.style.opacity = 0;

        var last = +new Date();
        var tick = function () {
            el.style.opacity = +el.style.opacity + (new Date() - last) / time;
            last = +new Date();

            if (+el.style.opacity < 1) {
                (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            }
        };
        tick();
    }

    let unShuffledChoices = []; // NOT to be confused with un-shuffled questions.
    let shuffledChoices = []; // NOT to be confused with shuffled questions.
    let answers = [];
    let labels = [];
    let form = document.querySelector('#form');
    /**
     * Render the questions on screen.
     */
    function render() {
        // Shuffle the array so that questions are randomized.
        shuffled = shuffle(unShuffled);

        for (let i = 0; i < shuffled.length; i++) {
            sq = shuffled[i];
            let legend = '<legend>' + sq.question + '</legend>';
            let ch1 = '<label for="choice1_' + i + '">' + sq.choice1 + '</label><input type="radio" name="question' + i + '" id="choice1_' + i + '" value="ch1"><br>';
            unShuffledChoices.push(ch1);
            let ch2 = '<label for="choice2_' + i + '">' + sq.choice2 + '</label><input type="radio" name="question' + i + '" id="choice2_' + i + '" value="ch2"><br>';
            unShuffledChoices.push(ch2);
            let ch3 = '<label for="choice3_' + i + '">' + sq.choice3 + '</label><input type="radio" name="question' + i + '" id="choice3_' + i + '" value="ch3"><br>';
            unShuffledChoices.push(ch3);
            let ch4 = '<label for="choice4_' + i + '">' + sq.choice4 + '</label><input type="radio" name="question' + i + '" id="choice4_' + i + '" value="ch4"><br>';
            unShuffledChoices.push(ch4);
            shuffledChoices = shuffle(unShuffledChoices);
            // Destruct array in ES5
            ch1 = shuffledChoices[0];
            ch2 = shuffledChoices[1];
            ch3 = shuffledChoices[2];
            ch4 = shuffledChoices[3];

            questionField = document.createElement('fieldset');
            questionField.classList.add('quizfield');
            questionField.classList.add('question' + i);
            questionField.innerHTML = legend + ch1 + ch2 + ch3 + ch4;
            form.appendChild(questionField);

            // Empty the choices so that they won't stack on every loop.
            unShuffledChoices = [];
            shuffledChoices = [];
        }
        let submit = document.createElement('input');
        submit.type = 'submit';
        submit.name = 'submit';
        submit.value = 'Submit';
        submit.classList.add('coolbutton');
        form.appendChild(submit);

        submit.addEventListener('click', function () {
            let correctSum = 0;
            for (var i = 0; i < shuffled.length; i++) {
                // Get the values of the checked input fields.
                answers[i] = document.querySelector("input[name=question" + i + "]:checked");

                //Check if the user checked the question.
                if (answers[i]) {
                    // Get the labels of the answered questions.
                    labels[i] = document.querySelector("label[for=" + answers[i].id + "]");
                    //console.log(labels[i].innerText);
                    //console.log(unShuffled[i].answer);

                    // Check if the answer was correct.
                    if (labels[i].innerText == unShuffled[i].answer) {
                        labels[i].style.color = "green";
                        correctSum++;
                    } else {
                        labels[i].style.color = "red";
                    }
                }
            }

            // Fill the modal with the results.
            document.getElementById('quiz-content').innerText = 'You got ' + correctSum + ' out of the ' + shuffled.length + ' questions right!'
            let resetButton = document.querySelector('.quiz-reset');
            if(correctSum===6){
                resetButton.value = "Cool!";
            }else{
                resetButton.value = "Maybe try again?";
            }
            // Open the modal.
            popup.style.display = "block";
            fadeIn(popup, 50);
        })
    }

    let popup = document.querySelector('.popup');
  /*  // Open link (used for debbuging the modal).
    document.getElementById('btn').addEventListener('click', function (e) {
        popup.style.display = "block";
        fadeIn(popup, 50);
        e.preventDefault();
    }); */

    // Close the modal.
    document.querySelector('.popup-close').addEventListener('click', function (e) {
        popup.style.display = "none";
        e.preventDefault();
    });

    // Reset the quiz.
    document.querySelector('.quiz-reset').addEventListener('click', function (e) {
        popup.style.display = "none";
        // Clear the quiz form.
        form.innerHTML="";
        // Re-render the quiz form.
        render();
        e.preventDefault();
    });

    /**
     * Create a new instance of a XMLHttpRequest and load asynchronously the contents of quizQuestions.json.
     * @param {*} callback 
     */
    function loadJSON(callback) {

        let xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', '../data/quizQuestions.json', true);
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode.
                callback(xobj.responseText);
            }
        };
        xobj.send(null);
    }


    //A script to fetch the quiz questions from the json file, shuflle them, add them one by one to the dom, by listening to the submit event the submit event of the previous one.
    loadJSON(function (response) {
        // Parse JSON string into object
        unShuffled = JSON.parse(response);
        render();
    });
});