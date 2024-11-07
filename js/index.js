let api = "https://dummyjson.com/recipies?limit=10"

fetch(api)
.then(function(response){
    return response.json();
})
.then(function (data) {
   console.log(data);


   
})
