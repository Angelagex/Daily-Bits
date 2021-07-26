//Recuperando Elementos de Local
let time = parseFloat(localStorage.getItem("tiempoTotal"));
let correctas = Number(localStorage.getItem("totalesCorrectas"));
let incorrectas = Number(localStorage.getItem("totalesIncorrectas"));
let total = correctas + incorrectas;

//Asignando values al HTML
document.getElementById("totalcontestadas").value = total;
document.getElementById("horasjugadas").value = time.toFixed(1);
document.getElementById("respuestascorrectas").value = correctas;
document.getElementById("respuestasincorrectas").value = incorrectas;