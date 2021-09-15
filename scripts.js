const quizData = [
    {
        question: "Que altura tiene la catedral de Morelia",
        a: "61m",
        b: "50m",
        c: "80m",
        d: "72m",
        correct: "a"
    },
    {
        question: "Cuantos anos tardo en construirse la catedral de Morelia",
        a: "2 anos",
        b: "35 anos",
        c: "84 anos",
        d: "72 anos",
        correct: "c"   
    },
    {
        question: "Que estilo tiene la catedral de Morelia",
        a: "Tritostilo",
        b: "Barroco tablerado",
        c: "Gotico",
        d: "Urbano",
        correct: "b"
    },

];
const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;    

    // currentQuestion++;
}

function getSelected(){
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if(answer){
        if (answer  === quizData[currentQuiz].correct){
            score++;
    }

    currentQuiz++;
    if(currentQuiz < quizData.length){
        loadQuiz();
    } else{
        
        quiz.innerHTML=
        `<h2>Respondiste correctamente a ${score}/${quizData.length} preguntas</h2>
        <button onClick="location.reload()">Reintentar</button>`;
    }
}




});