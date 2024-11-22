
let sumatoria = 0
const limite = 10
let receta = ``;

function vermas() {
let api = `https://dummyjson.com/recipes?limit=10&skip=${sumatoria}`;

fetch(api)
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
            <h4 class="recetas_name">${receta.name}</h4>
            <p class="recetas_cuisine">${receta.cuisine}</p>
            <img src="${receta.image}" alt="" class="receta_image">
            <p class="recetas_difficulty">${receta.difficulty}</p>
            <a href="receta.html?id=${receta.id}" class="receta_id">Ver receta</a>
          </article>`
        };
        contenedorRecetas.innerHTML += receta;
        sumatoria += limite;
});
};

//function vermas() {
//let api2 = `https://dummyjson.com/recipes?limit=10&skip=${sumatoria}`;
//
//  fetch(api2)
//  .then(function (response) {//  })
//  .then(function (data){
//    console.log(data);
//
//    let recetas = data.recipes;
//
//    let contenedorRecetas = document.querySelector(".recetas");
//    
//    if (sumatoria > 51) {
//      alert("No hay mas recetas disponibles")
//      return;
//    }
//    
//    recetas.forEach(function agregarmas(receta) {
//      contenedorRecetas.innerHTML += `
//      <article class="contenedor_recetas">
//        <h4 class="recetas_name">${receta.name}</h4>
//        <p class="recetas_cuisine">${receta.cuisine}</p>
//        <img src="${receta.image}" alt="" class="receta_image">
//        <p class="recetas_difficulty">${receta.difficulty}</p>
//        <a href="receta.html?id=${receta.id}" class="receta_id">Ver receta</a>
//      </article>`;
//    })
//      sumatoria += 10;
//      console.log(sumatoria);
//});
//};

let botonvermas = document.querySelector("#boton_vermas");
botonvermas.addEventListener("click", vermas);

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
        errorMensaje.innerText = "No puede ser menor a 3 ";
        valida = false;
    }
    
    if (valida) {
      formulario.submit();
    }
});