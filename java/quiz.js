const questions = [
    {
        question: "1 - O que é a geomorfologia?",
        choices: ["a) O estudo das formas da Terra.", "b) O estudo dos oceanos.", "c) O estudo das nuvens.", "d) O estudo das árvores."],
        correctAnswer: 0,
        attempts: 2
    },
    {
        question: "2 - Qual é a unidade básica da topografia?",
        choices: ["a) Metro", "b) Grau", "c) Hectare", "d) Pixel"],
        correctAnswer: 1,
        attempts: 2 
    },
    {
        question: "3 - O que é uma bacia hidrográfica?",
        choices: ["a) Uma área de drenagem de água.", "b) Um vale profundo.", "c) Uma montanha alta.", "d) Uma caverna subterrânea."],
        correctAnswer: 0,
        attempts: 2 
    },
    // Perguntas adicionais
    {
        question: "4 - Qual é a principal força responsável pela erosão da superfície terrestre?",
        choices: ["a) Vento", "b) Chuva ácida", "c) Gravidade", "d) Radiação solar"],
        correctAnswer: 2,
        attempts: 2 
    },
    {
        question: "5 - O que é um delta em geomorfologia?",
        choices: ["a)Um tipo de montanha.", "b) Uma planície alagada perto de uma costa.", "c) Uma formação de gelo na Antártida.", "d) Um deserto árido."],
        correctAnswer: 1,
        attempts: 2 
    },
    {
        question: "6 - Qual é a unidade de medida usada para calcular a inclinação de uma superfície em topografia?",
        choices: ["a) Metro", "b) Grau", "c) Hectare", "d) Pixel"],
        correctAnswer: 1,
        attempts: 2 
    },
    {
        question: "7 - Qual é o processo geomorfológico responsável pela formação de vales profundos e estreitos, muitas vezes em regiões montanhosas?",
        choices: ["a) Tectônica de placas", "b) Intemperismo químico", "c) Erosão fluvial", "d) Sedimentação glacial"],
        correctAnswer: 3,
        attempts: 2 
    },    {
        question: "8 - O que é uma elevação natural da superfície terrestre, geralmente mais baixa do que uma montanha e com uma cúpula arredondada?",
        choices: ["a) Planalto", "b) Serra" ,"c) Colina", "d) Pico"],
        correctAnswer: 2,
        attempts: 2 
    },    {
        question: "9 - Qual é a unidade de medida usada para representar a inclinação de uma superfície terrestre em topografia?",
        choices: ["a) Graus" ,"b) Milhas náuticas", "c) Pés", "d) Graus, porcentagem e grau por mil"],
        correctAnswer: 3,
        attempts: 2 
    },    {
        question: "10 - Qual processo geomorfológico envolve o movimento lento e contínuo de partículas de solo devido à gravidade?",
        choices: ["a) Erosão eólica", "b) Solifluxão", "c) Avalanche", "d) Deslizamento"],
        correctAnswer: 3,
        attempts: 2 
    },
    {
        question: "11 - Qual é o termo utilizado para descrever a linha que separa duas bacias hidrográficas, onde as águas fluem em direção a diferentes rios ou oceanos?",
        choices: ["a) Linha de costa", "b)Ponto de convergência", "c) Divisor de águas", "d) Bifurcação"],
        correctAnswer: 2,
        attempts: 2 
    },
    {
        question: "12 - Qual é o nome dado à representação gráfica que mostra as variações de altitude em uma determinada área, geralmente utilizando curvas de nível?",
        choices: ["a) Diagrama de isopletas", "b) Gráfico de precipitação", "c) Perfil longitudinal", "d) Mapa topográfico"],
        correctAnswer: 3,
        attempts: 2 
    }
];
let currentQuestion = 0;
let score = 0;




function displayQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");

    questionElement.textContent = questions[currentQuestion].question;
    choicesElement.innerHTML = "";

    for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
        const choice = questions[currentQuestion].choices[i];
        const button = document.createElement("button");
        button.textContent = choice;
        button.className = "btn";
        button.addEventListener("click", () => checkAnswer(i));
        choicesElement.appendChild(button);
    }
}

function checkAnswer(choice){
    if (choice === questions[currentQuestion].correctAnswer) {
        score++;
    } else {
        const correctChoice = questions[currentQuestion].choices[questions[currentQuestion].correctAnswer];
        alert(`Você errou! A resposta correta era: ${correctChoice}`);
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        endGame();
    }
}

function checkAnswer(choice) {
    const currentQuestionData = questions[currentQuestion];

    if (currentQuestionData.attempts > 0) {
        if (choice === currentQuestionData.correctAnswer) {
            score++;
            // Atualize o contador de respostas corretas
            const correctAnswersCountElement = document.getElementById("correct-answers-count");
            correctAnswersCountElement.textContent = score;
        } else {
            const correctChoice = currentQuestionData.choices[currentQuestionData.correctAnswer];
            alert(`Você errou! A resposta correta era: ${correctChoice}`);
        }
        currentQuestionData.attempts--;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    const container = document.querySelector(".container");
    container.innerHTML = `
        <h1>Parabéns!</h1>
        <p>Você completou o quiz.</p>
        <p>Sua pontuação final é: <span id="final-score">${score}</span></p>
        <button id="play-again-button">Jogar Novamente</button>
    `;

    const playAgainButton = document.getElementById("play-again-button");
    playAgainButton.addEventListener("click", restartGame);
    playAgainButton.style.display = "block"; // Mostra o botão
}
// O restante do seu código JavaScript permanece inalterado...


function nextQuestion() {
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        endGame();
    }
    
}

function startGame() {
    document.getElementById("play-button").style.display = "none";
    document.getElementById("question-container").style.display = "block";
    displayQuestion();
}
function restartGame() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("score-value").textContent = score;
    document.getElementById("play-again-button").style.display = "none";
    document.getElementById("question-container").style.display = "block";
    displayQuestion();
}