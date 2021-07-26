let section;
let question;
let questions = [1,2,3,4,5,6];
let random = () => {
    return Math.floor(Math.random() * (7 - 1) + 1);
}
function setLocal(question, questions, section) {

    localStorage.setItem("vidas", 2);
    localStorage.setItem("questions", questions);
    localStorage.setItem("question", question);
    localStorage.setItem("section", section);
    localStorage.setItem("respuestasCorrectas", 0);
    localStorage.setItem("respuestasIncorrectas", 0);
    localStorage.setItem("minutos", 0);
    localStorage.setItem("segundos", 0);
}

//Estableciendo seccion y preguntas
document.getElementById("html").addEventListener("click", function() {
    section = 1;
    let question = random();
    questions.splice(question-1, 1);
    setLocal(question, questions, section);
    location.href="http://127.0.0.1:5500/Daily%20Bits/question" + question + ".html";
});
document.getElementById("css").addEventListener("click", function() {
    section = 2;
    let question = random();
    questions.splice(question-1, 1);
    setLocal(question, questions, section);
    location.href="http://127.0.0.1:5500/Daily%20Bits/question" + question + ".html";
});
document.getElementById("js").addEventListener("click", function() {
    section = 3;
    let question = random();
    questions.splice(question-1, 1);
    setLocal(question, questions, section);
    location.href="http://127.0.0.1:5500/Daily%20Bits/question" + question + ".html";
});