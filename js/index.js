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

let api = "https://dummyjson.com/recipes?limit=10"

fetch(api)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);


    let recetas = data.recipes

    console.log(recetas)
    let contenedorRecetas = document.querySelector(".recetas")

    recetas.forEach(function (receta) {
        console.log(receta.name);

        contenedorRecetas.innerHTML += `
          <article class="contenedor_recetas">
            <h4 class="recetas_name">${receta.name}</h4>
            <p class="recetas_cuisine">${receta.cuisine}</p>
            <img src="${receta.image}" alt="" class="receta_image">
            <span class="recetas_difficulty">${receta.difficulty}</span>
            <a href="receta.html?id=${receta.id}" class="receta_id">Ver receta</a>
          </div>
        </div>`
});
});