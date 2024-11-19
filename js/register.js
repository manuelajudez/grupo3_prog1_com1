let reg_form = document.querySelector(".register_form");
let mail = document.querySelector("#email");
let contrasena = document.querySelector("#contrasena");

let error_email = document.querySelector("#invalid_email");
let error_password = document.querySelector("#invalid_contrasena");

reg_form.addEventListener("submit", function (e) {
    e.preventDefault();
    error_email.style.display = "none";
    error_password.style.display = "none";
    let valida = true
    if(mail.value == ""){
        error_email.style.display = "block";
        error_email.innerText = "Por favor, complete el campo.";
        valida = false;
    }
    if(contrasena.value == ""){
        error_password.style.display = "block";
        error_password.innerText = "Por favor, complete el campo.";
        valida = false;
    }
    if(valida){
        reg_form.submit(".boton_registro");
    }
});

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
        errorMensaje.innerText = "No puede ser menor a 3";
        valida = false;
    }
    
    if (valida) {
        formulario.submit();
    }
});