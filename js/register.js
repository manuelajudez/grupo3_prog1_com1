let form= document.querySelector("formulario");
let searchbar = document.querySelector("#searchbar");
let errorMensaje = document.querySelector("#error-message");
form.addEventListener("submit", function (e) {
	e.preventDefault();
    errorMensaje.style.display= "none";
    errorMensaje.innerText= "";
	let valida= true
if (searchbar.ariaValueMax.trim()==="") {
    errorMensaje.style.display ="block" ; 
    errorMensaje.innerText ="el campo esta vacio";  
    valida=false
}
if (searchbar.value.trim().length< 3) {
    errorMensaje.style.display="block";
    errorMensaje.innerText="el campo no puede ser menor a 8 numeros "
    valida=false

}
if(valida){
    form.submit();
}
})