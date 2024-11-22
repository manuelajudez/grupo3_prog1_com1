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
        errorMensaje.innerText = "No puede ser menor a 3";
        valida = false;
    }
    
    if (valida) {
        formulario.submit();
    }
});

let querystring = location.search;
let datos = new URLSearchParams(querystring);
let categoria = datos.get("categoria");
let url = `https://dummyjson.com/recipes/tag/${categoria}`; 
console.log(categoria);
let recetas = document.querySelector(".recetas")

fetch(url)
.then(function(response) {
    return response.json(); 
})
.then(function(data) {
    console.log(data.recipes);
    for (let i = 0; i < data.recipes.length; i++) {
        
        let receta = data.recipes[i];
        document.querySelector(".recetas")
        recetas.innerHTML += `
          <article>
            <img src="${receta.image}" alt="">
            <h4>${receta.name}</h4>
            <p>${receta.difficulty}</p>
            <a href="receta.html?id=${receta.id}">Ver link del detalle</a>
          </article>`
        };
    }
)

.catch(function(err) {
    console.log(err);
});