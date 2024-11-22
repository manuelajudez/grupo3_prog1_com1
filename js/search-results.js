let queryString = window.location.search;
let obj = new URLSearchParams(queryString);
let recetaBuscada = obj.get("search");

let url = `https://dummyjson.com/recipes/search?q=${recetaBuscada}`;
let contenedorRecetas = document.querySelector(".recetas");
let tituloBusqueda = document.getElementById("titulo-busqueda");

tituloBusqueda.textContent = `Resultados de búsqueda para: "${recetaBuscada}"`;

fetch(url)
  .then(function (response) {
    return response.json(); 
  })
  .then(function (data) {
    console.log(data, `data`);
    let recetas = data.recipes;
    if (recetas.length > 0) {

        for (let i = 0; i < recetas.length; i++) {
          let receta = recetas[i];
          let recetaHTML = `
            <article class="contenedor_recetas">
              <h4 class="recetas_name">${receta.name}</h4>
              <p class="recetas_cuisine">${receta.cuisine}</p>
              <img src="${receta.image}" alt="${receta.name}" class="receta_image">
              <p class="recetas_difficulty">Dificultad: ${receta.difficulty}</p>
              <a href="receta.html?id=${receta.id}" class="receta_id">Ver receta</a>
            </article>
          `;
          contenedorRecetas.innerHTML += recetaHTML;
        }
      } else {
        
        contenedorRecetas.innerHTML = `<p>No hay coincidencias para tu búsqueda.</p>`;
      }
    })
    .catch(function (err) {

      contenedorRecetas.innerHTML = `<p>Error al cargar los resultados.</p>`;
      console.error(err);
    });