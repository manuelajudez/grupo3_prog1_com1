// let form= document.querySelector("formulario");
// let searchbar = document.querySelector("#searchbar");
// let errorMensaje = document.querySelector("#error-message");
// form.addEventListener("submit", function (e) {
// 	e.preventDefault();
//     errorMensaje.style.display= "none";
//     errorMensaje.innerText= "";
// 	let valida= true
// if (searchbar==="") {
//     errorMensaje.style.display ="block" ; 
//     errorMensaje.innerText ="el campo esta vacio";  
//     valida=false
// }
// if (searchbar.length< 3) {
//     errorMensaje.style.display="block";
//     errorMensaje.innerText="el campo no puede ser menor a 8 numeros "
//     valida=false
// 
// }
// if(valida){
//     form.submit();
// }
// })

// •	Validar que el campo email no esté vacío. Si está vacío mostrar al usuario el texto "Por favor complete el campo email" usando un alert.
// •	Validar que el campo contraseña no esté vacío. Si está vacío mostrar al usuario el texto "Por favor complete el campo contraseña" usando un alert.
// •	Si el formulario cumple con las validaciones deberá redirigir a la página principal.

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
});