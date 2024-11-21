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
let cat = datos.get("categoria");

console.log(cat);
console.log('hola')
let api = 'https://dummyjson.com/recipes/tag/' + cat;
console.log(api, 'wok')

fetch(api)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data, 'hola');

    let recetas = data.recipes
    console.log(recetas, 'data')
    let contenedorRecetas = document.querySelector(".recetas")

    recetas.forEach(function (receta) {
        console.log(receta);
        contenedorRecetas.innerHTML += `
        <div class="receta card">
          <div class="card-body">
            <h4 class="card-title">${receta.name}</h4>
            <p class="card-title">${receta.difficulty}</p>
            </div>
        </div>`
    });
})