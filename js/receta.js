let queryString = window.location.search;

let obj = new URLSearchParams(queryString)
console.log(obj);

let id = obj.get("id");
console.log(id);

let url = `https://dummyjson.com/recipes?limit=10/${id}`;

fetch(url)
.then(function(response){
    console.log(data)
})
.then(function(data){
    console.log(data)

    let name = document.querySelector(".name")
    let instructions = document.querySelector(".instructions") 
    let prepTimeMinutes = document.querySelector(".prepTimeMinutes") 
    let  = document.querySelector(".image") 
    
    name.innerHTML+= `${data.name}`
    instructions.innerText+= `${data.instructions}`
    prepTimeMinutes.innerText+= `${data.prepTimeMinutes}`
    image.src = `${data.image}` 
})
.catch(function(err){
    console.log(err)
})
