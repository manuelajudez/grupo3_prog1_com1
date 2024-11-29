let queryString = window.location.search; 
let obj = new URLSearchParams(queryString); 
let recetaBuscada = obj.get("search"); 
console.log(recetaBuscada);

fetch(`https://dummyjson.com/recipes/search?q=${recetaBuscada}`)
  .then(function (response) {
    return response.json(); })

 .then(function (data) {
     console.log(data)
     let recetas = data.recipes;
     let contenedorRecetas = document.querySelector(".recetas");
     let resultadosTitulo = document.querySelector(".titulos-busqueda");
    
     if (!recetas || recetas.length === 0) {
      contenedorRecetas.innerHTML = `<p class="mensaje-error">Búsqueda inexistente. No se encontraron recetas para "${recetaBuscada}".</p>`;
      return; 
    }else{
      resultadosTitulo.innerHTML=`<h2 class="resultado_busqueda"> Resultados para tu  busqueda: "${recetaBuscada}"</h2>`
    }

     for (let i = 0; i < recetas.length; i++) {
      let receta = recetas[i];
      console.log(receta);
      contenedorRecetas.innerHTML += `
          <article class="contenedor_recetas">
              <h4 class="recetas_name">${receta.name}</h4>
              <p class="recetas_cuisine">${receta.cuisine}</p>
              <img src="${receta.image}" alt="" class="receta_image">
              <p class="recetas_difficulty">${receta.difficulty}</p>
              <a href="receta.html?id=${receta.id}" class="receta_id">Ver receta</a>
          </article>`;
  }
  
 })
 .catch(function(err) {
  console.log(err);
});

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

  
