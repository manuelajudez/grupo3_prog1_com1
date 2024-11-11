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
        <div>
          <div>
            <h4>${receta.name}</h4>
            <p>Cocina: ${receta.cuisine}</p>
            <span>${receta.difficulty}</span>
            <a href="receta.html?id=${receta.id}">Ver receta</a>
          </div>
        </div>`
});
});