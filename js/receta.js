let queryString = window.location.search; 

let obj = new URLSearchParams(queryString); 

let id = obj.get("id"); 

let url = `https://dummyjson.com/recipes/${id}`; 

fetch(url)
.then(function(response) {
    return response.json(); 
})

.then(function(data) {
    console.log(data)
    let name = document.querySelector(".name");
    let instructions = document.querySelector(".instructions");
    let prepTimeMinutes = document.querySelector(".prepTimeMinutes");
    let image = document.querySelector(".image"); 
    let tags = document.querySelector(".tags")
    name.innerHTML += `${data.name}`; 
    instructions.innerText += `${data.instructions}`; 
    prepTimeMinutes.innerText += `${data.prepTimeMinutes} minutes`; 
    image.src = `${data.image}`; 

    let vacio = ""

    for (let i = 0; i < data.tags.length; i++) {
        vacio += `${data.tags[i]}`
        tags.innerHTML += vacio
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
