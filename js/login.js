let formulario = document.querySelector("#cuestionario"); 
let searchbar = document.querySelector("#searchbar"); 
let errorMensaje = document.querySelector("#error-mensaje"); 

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    errorMensaje.style.display = "none"; 
    errorMensaje.innerText = ""; 

    let valida = true; 

    if (searchbar.value === "") {
        errorMensaje.style.display = "block";
        errorMensaje.innerText = "El campo está vacío";
        valida = false;
    }
    
    else if (searchbar.value.length < 3) {
        errorMensaje.style.display = "block";
        errorMensaje.innerText = "El campo debe tener al menos 3 caracteres";
        valida = false;
    }
    
    if (valida) {
        formulario.submit();
    }
});

let log_form = document.querySelector(".login_form");
let log_mail = document.querySelector("#log_email");
let log_contrasena = document.querySelector("#log_contrasena");

let error_email = document.querySelector("#invalid_log_email");
let error_password = document.querySelector("#invalid_log_contrasena");

log_form.addEventListener("submit", function (e) {
    e.preventDefault();
    let log_valida = true
    if(log_mail.value == ""){
        alert("Por favor, complete el campo email.");
        log_valida = false;
    }
    if(log_contrasena.value == ""){
        alert("Por favor, complete el campo contraseña.");
        log_valida = false;
    }
    if(log_valida){
        log_form.submit(".botonLogin");
    }
})