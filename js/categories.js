let formulario = document.querySelector("#cuestionario"); 
let searchbar = document.querySelector("#searchbar"); 
let errorMensaje = document.querySelector("#error-mensaje"); 

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    errorMensaje.style.display = "none"; 
    errorMensaje.innerText = ""; 

    if (searchbar.value.length < 3) {
        errorMensaje.style.display = "block";
        errorMensaje.innerText = "No puede ser menor a 3";
    }
    else{
        formulario.submit();
    }
});

let api4 = "https://dummyjson.com/recipes/tags"

fetch(api4)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    let recetas = data

    console.log(recetas)

    let contenedorRecetas = document.querySelector(".recetas")

    recetas.forEach(function (receta) {
        console.log(receta);
        contenedorRecetas.innerHTML += 
        ` <article class="receta card">
            <h4 class="card-title">${receta}</h4>
            <a class="btn" href="detalle-categoria.html?categoria=${receta}">Ver comidas de esta categoria</a>
          </article>`
   });
  });