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
    recetas.forEach(function (recetas) {
        console.log(recetas.name);
        contenedorRecetas.innerHTML +=
          '<div class=""><a href="">'+
          recetas.name +
          "</a></div>";
      });
  });
