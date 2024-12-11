const questions = [

    {

        question: "What is the largest planet in our solar system?",

        options: ["Earth", "Jupiter", "Saturn", "Mars"],

        answer: 1

    },

    {

        question: "Which animal is known as the King of the Jungle?",

        options: ["Lion", "Tiger", "Elephant", "Giraffe"],

        answer: 0

    },

    {

        question: "Who developed the theory of relativity?",

        options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Marie Curie"],

        answer: 1

    },

    {

        question: "What is the capital city of Japan?",

        options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],

        answer: 2

    },

    {

        question: "Which element has the chemical symbol 'O'?",

        options: ["Oxygen", "Osmium", "Ozone", "Opium"],

        answer: 0

    },

    {

        question: "Who wrote 'Romeo and Juliet'?",

        options: ["William Shakespeare", "Charles Dickens", "J.K. Rowling", "Ernest Hemingway"],

        answer: 0

    },

    {

        question: "What is the smallest planet in our solar system?",

        options: ["Mercury", "Mars", "Venus", "Earth"],

        answer: 0

    },

    {

        question: "What is the main ingredient in guacamole?",

        options: ["Tomato", "Avocado", "Onion", "Lettuce"],

        answer: 1

    },

    {

        question: "Which country is famous for the Great Wall?",

        options: ["India", "China", "Japan", "Egypt"],

        answer: 1

    },

    {

        question: "What is the tallest mountain in the world?",

        options: ["K2", "Mount Everest", "Mount Fuji", "Mount Kilimanjaro"],

        answer: 1

    },

    {

        question: "What is the square root of 144?",

        options: ["10", "12", "14", "16"],

        answer: 1

    },

    {

        question: "Which planet is known as the Red Planet?",

        options: ["Earth", "Mars", "Venus", "Saturn"],

        answer: 1

    },

    {

        question: "Which continent is the Sahara Desert located in?",

        options: ["Asia", "Africa", "Australia", "North America"],

        answer: 1

    },

    {

        question: "What is the largest ocean on Earth?",

        options: ["Atlantic", "Indian", "Arctic", "Pacific"],

        answer: 3

    },

    {

        question: "Who invented the telephone?",

        options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Michael Faraday"],

        answer: 0

    },

    {

        question: "What is the currency of Japan?",

        options: ["Yuan", "Yen", "Won", "Ringgit"],

        answer: 1

    },

    {

        question: "What is the chemical symbol for gold?",

        options: ["Au", "Ag", "Fe", "Pb"],

        answer: 0

    },

    {

        question: "What is the largest continent by area?",

        options: ["Africa", "Asia", "Europe", "North America"],

        answer: 1

    },

    {

        question: "Which famous scientist discovered penicillin?",

        options: ["Albert Einstein", "Marie Curie", "Isaac Newton", "Alexander Fleming"],

        answer: 3

    },

    {

        question: "What is the capital of Australia?",

        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],

        answer: 2

    }

];

let currentQuestionIndex = 0;

let score = 0;

let selectedAnswer = null;

function displayQuestion() {

    const questionObj = questions[currentQuestionIndex];

    document.getElementById('question').textContent = questionObj.question;

    const optionsList = document.getElementById('options');

    optionsList.innerHTML = '';

    questionObj.options.forEach((option, index) => {

        const li = document.createElement('li');

        li.innerHTML = `<button class="btn" onclick="selectOption(${index}, this)">${option}</button>`;

        optionsList.appendChild(li);

    });

    document.getElementById('submitBtn').style.display = 'inline-block';

}

function selectOption(index, button) {

    selectedAnswer = index;

    const buttons = document.querySelectorAll('.btn');

    buttons.forEach((btn) => {

        btn.disabled = true;

    });

    const correctAnswer = questions[currentQuestionIndex].answer;

    if (index === correctAnswer) {

        button.style.backgroundColor = 'green'; // Green for correct answer

    } else {

        button.style.backgroundColor = 'red'; // Red for wrong answer

        buttons[correctAnswer].style.backgroundColor = 'green'; // Highlight the correct answer

    }

}

function submitAnswer() {

    if (selectedAnswer === null) {

        alert('Please select an answer before submitting.');

        return;

    }

    if (selectedAnswer === questions[currentQuestionIndex].answer) {

        score++;

    }

    currentQuestionIndex++;

    selectedAnswer = null;

    if (currentQuestionIndex < questions.length) {

        setTimeout(() => {

            displayQuestion();

        }, 1000); // 1-second delay to show feedback

    } else {

        document.getElementById('result').textContent = `Quiz finished! Final score: ${score}/${questions.length}`;

        document.getElementById('submitBtn').style.display = 'none';

        document.getElementById('options').innerHTML = ''; // Clear options

        document.getElementById('question').textContent = ''; // Clear question

    }

}

window.onload = displayQuestion;
