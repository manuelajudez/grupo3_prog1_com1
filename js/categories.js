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

    let categoria = data

    console.log(categoria)

    let contenedorRecetas = document.querySelector(".recetas")

  for (let i = 0; i < categoria.length; i++) {
    const categoria = data[i];

  contenedorRecetas.innerHTML += 
         `<article class="receta card">
            <h4 class="card-title">${categoria}</h4>
            <a class="btn" href="./category.html?categoria=${categoria}">Ver comidas de esta categoria</a>
           </article>`
  };
});