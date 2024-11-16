let queryString = window.location.search; 
let obj = new URLSearchParams(queryString); 

let id = obj.get("id"); 
console.log(id);

let url = `https://dummyjson.com/recipes/${id}`; 

fetch(url)
.then(function(response) {
    return response.json(); 
})
.then(function(data) {
console.log(data); 

let name = document.querySelector(".name");
let instructions = document.querySelector(".instructions");
let prepTimeMinutes = document.querySelector(".prepTimeMinutes");
let image = document.querySelector(".image"); 

name.innerHTML = `${data.name}`; 
instructions.innerText = `${data.instructions}`; 
prepTimeMinutes.innerText = `${data.prepTimeMinutes} minutos`; 
image.src = `${data.image}`; 
})
.catch(function(err) {
    console.log(err);
});

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