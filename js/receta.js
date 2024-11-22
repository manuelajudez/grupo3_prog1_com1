let queryString = window.location.search; 

let obj = new URLSearchParams(queryString); 

let id = obj.get("id"); 

let url = `https://dummyjson.com/recipes/${id}`; 

fetch(url)
.then(function(response) {
    return response.json(); 
})

.then(function(data) {
    let name = document.querySelector(".name");
    let instructions = document.querySelector(".instructions");
    let prepTimeMinutes = document.querySelector(".prepTimeMinutes");
    let image = document.querySelector(".image"); 
    let mealType = document.querySelector(".mealType")
    name.innerHTML += `${data.name}`; 
    instructions.innerText += `${data.instructions}`; 
    prepTimeMinutes.innerText += `${data.prepTimeMinutes} minutes`; 
    image.src = `${data.image}`; 
    mealType.innerHTML += `${data.mealType}`
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