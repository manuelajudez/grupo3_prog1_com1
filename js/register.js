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

let form = document.querySelector(".register_form");
let mail = document.querySelector("#email");
let contrasena = document.querySelector("#contrasena");

let error_email = document.querySelector("#invalid_email");
let error_password = document.querySelector("#invalid_contrasena");

form.addEventListener("submit", function (e) {
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
        form.submit();
    }
});