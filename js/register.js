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