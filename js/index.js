// let form= document.querySelector("formulario");
// let searchbar = document.querySelector("#searchbar");
// let errorMensaje = document.querySelector("#error-message");
// form.addEventListener("submit", function (e) {
// 	e.preventDefault();
//     errorMensaje.style.display= "none";
//     errorMensaje.innerText= "";
// 	let valida= true
// if (searchbar==="") {
//     errorMensaje.style.display ="block" ; 
//     errorMensaje.innerText ="el campo esta vacio";  
//     valida=false
// }
// if (searchbar.length< 3) {
//     errorMensaje.style.display="block";
//     errorMensaje.innerText="el campo no puede ser menor a 8 numeros "
//     valida=false
// 
// }
// if(valida){
//     form.submit();
// }
// })

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
            <span class="recetas_difficulty">${receta.difficulty}</span>
            <a href="receta.html?id=${receta.id}" class="receta_id">Ver receta</a>
          </div>
        </div>`
});
});