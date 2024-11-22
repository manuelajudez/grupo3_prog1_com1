
let sumatoria = 0
const limite = 10
let receta = ``;


function vermas() {
let api2 = `https://dummyjson.com/recipes?limit=10&skip=${sumatoria}`;

fetch(api2)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    let recetas = data.recipes

    console.log(recetas)
    let contenedorRecetas = document.querySelector(".recetas")

      if (sumatoria > 51) {
      alert("No hay mas recetas disponibles")
      return;
}
        for (let i = 0; i < recetas.length; i++) {
          const recetas = data.recipes[i];
          
        contenedorRecetas.innerHTML += `
          <article class="contenedor_recetas">
            <h4 class="recetas_name">${recetas.name}</h4>
            <p class="recetas_cuisine">${recetas.cuisine}</p>
            <img src="${recetas.image}" alt="" class="receta_image">
            <p class="recetas_difficulty">${recetas.difficulty}</p>
            <a href="receta.html?id=${recetas.id}" class="receta_id">Ver receta</a>
          </article>`
        };
        contenedorRecetas.innerHTML += receta;
        sumatoria += limite;
});
};

vermas();

let botonvermas = document.querySelector("#boton_vermas");
botonvermas.addEventListener("click", vermas);

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
