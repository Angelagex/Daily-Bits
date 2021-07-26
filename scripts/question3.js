//Data a importar
import {PreguntasH} from '../db/html.js';
import {PreguntasC} from '../db/css.js';
import {PreguntasJ} from '../db/js.js';

//Traer del localStorage
let questions = localStorage.getItem("questions").split(",").map(item => {return Number(item)});
let qlngt = questions.length;
let vidas = Number(localStorage.getItem("vidas"));
document.getElementById("vidas").value = vidas
let respuestasCorrectas = Number(localStorage.getItem("respuestasCorrectas"));
let respuestasIncorrectas = Number(localStorage.getItem("respuestasIncorrectas"));
let totalCorrectas = Number(localStorage.getItem("totalesCorrectas"));
let totalIncorrectas = Number(localStorage.getItem("totalesIncorrectas"));
let section = Number(localStorage.getItem("section"));
let horas = Number(localStorage.getItem("horas"));
let minutos = Number(localStorage.getItem("minutos"));
let segundos = Number(localStorage.getItem("segundos"));

//Elementos del Contenido HTML
let enunciado = document.getElementById("enunciado");
let opcion1 = document.getElementById("opcion1");
let opcion2 = document.getElementById("opcion2");
let opcion3 = document.getElementById("opcion3");
let opcion4 = document.getElementById("opcion4");
let respuesta = document.getElementById("respuesta");


//Funcion Asignar Contenido al HTML
function Pregu(data){
  let pregunta = data[2];
    enunciado.innerHTML = pregunta.enunciado;
    opcion1.innerHTML = pregunta.opc1;
    opcion2.innerHTML = pregunta.opc2;
    opcion3.innerHTML = pregunta.opc3;
    opcion4.innerHTML = pregunta.opc4;
    imagen1.src = pregunta.img1;
    imagen2.src = pregunta.img2;
    imagen3.src = pregunta.img3;
    imagen4.src = pregunta.img4;
    respuesta.innerHTML = pregunta.respuesta;
}
function Insert(){
  if(section == 1){
    Pregu(PreguntasH);
  }
  else if (section == 2) {
    Pregu(PreguntasC)
  }
  else if (section == 3){
    Pregu(PreguntasJ)
  }
}
Insert()

//Elementos Barras
let barra0 = "media/Progress=0.png";
let barra1 = "media/Progress=10.png";
let barra2 = "media/Progress=20.png";
let barra3 = "media/Progress=40.png";
let barra4 = "media/Progress=60.png";
let barra5 = "media/Progress=80.png";
let barra6 = "media/Progress=100.png";

//Elementos cambiar colores de caja
let customCheckboxes = document.getElementsByClassName('custom-radio-checkbox__input');
let checkboxes = document.getElementsByClassName("custom-radio-checkbox");

//Estilos de las boxes
let customStyles = `border: 2px solid #2CB67D`;
let customStyles2 = `border: 2px solid #FFFFFE;`;
let customStyles3 = `border: 2px solid #EF4565;`;

//Estilo del barra
let barrita = document.getElementById("barrita");

//Elementos comprobar respuesta
let displayTrue = `display: flex;`;
let displayFalse = `display: none;`;
let comprbarbtn = document.getElementById("comprobar");
let r1 = document.getElementById("R2");
let r2 = document.getElementById("R1");
let r3 = document.getElementById("R3");
let r4 = document.getElementById("R4");
let respondioBien = document.getElementById("respondiobien");
let respondioMal = document.getElementById("respondiomal");

//Funcion comprobar respuesta
comprbarbtn.addEventListener("click", (e) => {
  e.preventDefault();
  if(r1.checked){
    mostrar(respondioBien);
    sumarCorrecta();
  }
  else if (r2.checked){
    mostrar(respondioMal);
    restarVidas();
    sumarIncorrecta();
    r2.style = customStyles3;
    cambiarIndicador(r2);
  }
  else if (r3.checked){
    restarVidas();
    sumarIncorrecta();
    mostrar(respondioMal);
    cambiarIndicador(r3);
  }
  else if (r4.checked){
    restarVidas();
    sumarIncorrecta();
    mostrar(respondioMal);
    cambiarIndicador(r3);
  }
});

//Funciones de Salida

let perdiste = document.getElementById("malfinal");
let perdistebtn = document.getElementById("malfinalizarseccion");
let ganaste = document.getElementById("final");
let ganastebtn = document.getElementById("finalizarseccion");
let pantallasalir = document.getElementById("pantallasalir");
let salidabtn = document.getElementById("salida");
let exit = document.getElementById("exit");

ganastebtn.addEventListener("click", function(e){
  e.preventDefault();
  location.href="http://127.0.0.1:5500/Daily%20Bits/index.html";
})

perdistebtn.addEventListener("click", function(e){
  e.preventDefault();
  location.href="http://127.0.0.1:5500/Daily%20Bits/index.html";
})

exit.addEventListener("click", function (e){
  location.href="http://127.0.0.1:5500/Daily%20Bits/index.html";
})

salidabtn.addEventListener("click", function(e){
  e.preventDefault();
  mostrar(pantallasalir)
})

let volver = document.getElementById("volver")
volver.addEventListener("click", function(e){
  e.preventDefault();
  ocultar(pantallasalir)
})


let siguientePC = document.getElementById("contcorrecta");
siguientePC.addEventListener("click", function(e){
  e.preventDefault();
  if(questions == 0){
    actualizarTotales();
    barrita.src = barra6;
    ocultar(respondioBien);
    mostrar(ganaste);
    stop();
    }
  else {
    generarPregunta(questions)
  }
});

let siguientePI = document.getElementById("contincorrecta");
siguientePI.addEventListener("click", function(e){
  e.preventDefault();
  if(Number(localStorage.getItem("vidas")) <= 0){
    actualizarTotales();
    barrita.src = barra6;
    ocultar(respondioMal);
    mostrar(perdiste);
    stop();
  }
  else if(questions == 0) {
    actualizarTotales();
    barrita.src = barra6;
    ocultar(respondioMal);
    mostrar(ganaste);
    stop()
  }
  else{
    generarPregunta(questions);
  };
});

  //Funcion cambiar colores de caja
for (const box of customCheckboxes) {
    
    box.addEventListener('change', (event) => {
      let parent = event.target.parentNode;

      if (event.target.checked) {
        for (const item of checkboxes){
          item.style = customStyles2;
        };
        parent.style = customStyles;
      } else {
        parent.style = "";
      }
    });
  }

//Funcion mostrar

function mostrar(ventana) {
  ventana.style = displayTrue
};

//Funcion ocultar

function ocultar(ventana) {
  ventana.style = displayFalse
};

//Funcion cambiar indicador

function cambiarIndicador(r) {
  r.parentNode.style = customStyles3;
}

//Funcion para generar siguiente pregunta

function generarPregunta(arr) {
  let lngt = arr.length
  if (lngt==1){
    let pregunta = arr.splice(0,1);
    localStorage.setItem("questions", arr);
    location.href="http://127.0.0.1:5500/Daily%20Bits/question" + pregunta + ".html";;
  } else {
    let random = Math.floor(Math.random() * lngt);
    let pregunta = arr.splice(random, 1);
    localStorage.setItem("questions", arr);
    location.href="http://127.0.0.1:5500/Daily%20Bits/question" + pregunta + ".html";;
  }
}

//Funciones de LocalStorage

function restarVidas(){
  document.getElementById("vidas").value = vidas - 1;
  localStorage.setItem("vidas", vidas - 1);
}
function sumarCorrecta(){
  localStorage.setItem("respuestasCorrectas", respuestasCorrectas + 1)
}
function sumarIncorrecta(){
  localStorage.setItem("respuestasIncorrectas", respuestasIncorrectas + 1)
}


//Funcion Barra de Carga
if(questions == 0) {
  barrita.src = barra5;
} else {
  switch(qlngt){

    case qlngt = 5: barrita.src = barra0;
    break;
    case qlngt = 4: barrita.src = barra1;
    break;
    case qlngt = 3: barrita.src = barra2;
    break;
    case qlngt = 2: barrita.src = barra3;
    break;
    case qlngt = 1: barrita.src = barra4;
    break;
  }
}

//Funcion actualizar totales

function actualizarTotales(){
  localStorage.setItem("totalesIncorrectas", totalIncorrectas + Number(localStorage.getItem("respuestasIncorrectas")));
  localStorage.setItem("totalesCorrectas", totalCorrectas + Number(localStorage.getItem("respuestasCorrectas")));
  document.getElementById("respuestascorrectas").value = Number(localStorage.getItem("respuestasCorrectas"));
  document.getElementById("respuestasincorrectas").value = Number(localStorage.getItem("respuestasIncorrectas"));
  document.getElementById("tiempoempleado").value = Number(localStorage.getItem("minutos"));
}

//Funcion Cronometro
let id;
function cronometro(){
  
  segundos++;
  if (segundos>59){minutos++;segundos=0;}
  if (minutos>59){h++;minutos=0;}
  if (horas>24){horas=0;}

  localStorage.setItem("horas", horas);
  localStorage.setItem("minutos", minutos);
  localStorage.setItem("segundos", segundos);; 
}
init()

//Iniciar y detener Cronometro
function init(){
  cronometro();
  id = setInterval(cronometro,1000);
}
function stop(){
  clearInterval(id);
  let tiempoTotal = Number(localStorage.getItem("horas")) + (Number(localStorage.getItem("minutos") / 60) + Number(localStorage.getItem("tiempoTotal")))
  localStorage.setItem("tiempoTotal", tiempoTotal)
};