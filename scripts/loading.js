function redireccionar(){
    localStorage.setItem("totalesCorrectas", 0);
    localStorage.setItem("totalesIncorrectas", 0);
    localStorage.setItem("horas", 0);
    localStorage.setItem("tiempoTotal", 0);
    location.href="http://127.0.0.1:5500/Daily%20Bits/login.html";
}
setTimeout ("redireccionar()", 5000);
