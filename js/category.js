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

let querystring = location.search;
let datos = new URLSearchParams(querystring);
let cat = datos.get("tags");

console.log(cat);
let api = 'https://dummyjson.com/recipes/tag/' + cat;
console.log(api, 'api')

fetch(api)
.then(function(response){
    return response.json();
})


.then(function(data) {
    let recetas = data.recipes
    console.log(recetas, 'recetas data')
    let contenedorRecetas = document.querySelector(".recetas")

    let name = document.querySelector(".name");
    let image = document.querySelector(".image"); 
    
    name.innerHTML += `${data.name}`; 
    image.src = `${data.image}`; 
    difficulty.innerHTML += `${data.difficulty}`;
});