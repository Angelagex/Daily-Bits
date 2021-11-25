function redireccionar(){
    localStorage.setItem("totalesCorrectas", 0);
    localStorage.setItem("totalesIncorrectas", 0);
    localStorage.setItem("horas", 0);
    localStorage.setItem("tiempoTotal", 0);
    location.href="https://angelagex.github.io/Daily-Bits/login.html";
}
setTimeout ("redireccionar()", 5000);
