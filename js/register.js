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

// •	Validar el campo email. Si está vacío mostrar al usuario el texto en pantalla (no con alert) "Por favor complete el campo" y el formulario no se enviará.
// •	Validar el campo contraseña. Si está vacío mostrar al usuario el texto en pantalla (no con alerta) "Por favor complete el campo" y el formulario no se enviará.
// •	Si el formulario cumple con las validaciones deberá redirigir al formulario de login.


let form = document.querySelector("form");
let mail = document.querySelector("#email");
let contrasena = document.querySelector("#password");

let error_email = document.querySelector("#invalid_email");
let error_password = document.querySelector("#invalid_password");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valida = true
    if(mail.value == ""){
        error_email.style.display = "block", "bold";
        error_email.innerText = "Por favor, complete el campo con su email."
        valida = false
    }
    if(contrasena.value == ""){
        error_password.style.display = "block";
        error_password.innerText = "Por favor, complete el campo con su contraseña."
        valida = false
    }
    if(valida){
        form.submit();
    }
})