let queryString = window.location.search; 
let obj = new URLSearchParams(queryString); 

let recetaBuscada = obj.get("search"); 
let url = `https://dummyjson.com/recipes/search?q=${recetaBuscada}`; 

fetch(url)
.then(function(response) {
    return response.json(); 
})

.then(function(data) {
    console.log(data, 'data buscada')
    let recetas = data.recipes

    let contenedorRecetas = document.querySelector(".recetas")
    recetas.forEach(function (receta) {
        console.log(receta);
        contenedorRecetas.innerHTML += `
         <article class="contenedor_recetas">
              <h4 class="recetas_name">${receta.name}</h4>
              <p class="recetas_cuisine">${receta.cuisine}</p>
              <img src="${receta.image}" alt="" class="receta_image">
              <p class="recetas_difficulty">${receta.difficulty}</p>
              <a href="receta.html?id=${receta.id}" class="receta_id">Ver receta</a>
            </article>`;
});
})

.catch(function(err) {
    console.log(err);
});
