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
let api3 = "https://dummyjson.com/recipes/tags"

fetch(api3)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    let recetas = data
    console.log(recetas)

    let contenedorRecetas = document.querySelector(".recetas");

    if (Array(recetas)){
    recetas.forEach(function(receta) {
        console.log(receta);
        contenedorRecetas.innerHTML += `
        <div class="receta card">
          <div class="card-body">
            <h4 class="card-title">${receta}</h4>
            <a class="btn" href="detalle-categoria.html?categoria=${receta}">Ver comidas de esta categoria</a>
          </div>
        </div>`
});
};
});