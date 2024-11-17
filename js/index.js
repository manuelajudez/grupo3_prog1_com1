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
            <p class="recetas_difficulty">${receta.difficulty}</p>
            <a href="receta.html?id=${receta.id}" class="receta_id">Ver receta</a>
          </article>`
});
});

let sumatoria = 0
const adicion = 10

function vermas() {
  fetch(api)
  .then(function (response) {
    return response.json();
  })
  .then(function (data){
    console.log(data);

    let recetas = data.recipes

    let contenedorRecetas = document.querySelector(".vermasrecetas")

    let masrecetas = ""
    
    for (let i = sumatoria; i < sumatoria + adicion; i++) {
      const receta = recetas[i];

        masrecetas += `
          <article class="contenedor_recetas">
            <h4 class="recetas_name">${receta.name}</h4>
            <p class="recetas_cuisine">${receta.cuisine}</p>
            <img src="${receta.image}" alt="" class="receta_image">
            <p class="recetas_difficulty">${receta.difficulty}</p>
            <a href="receta.html?id=${receta.id}" class="receta_id">Ver receta</a>
          </article>`;
      }
      contenedorRecetas.innerHTML += masrecetas;
      sumatoria += adicion
});
};

let botonvermas = document.querySelector("#boton_vermas");
botonvermas.addEventListener("click", vermas);