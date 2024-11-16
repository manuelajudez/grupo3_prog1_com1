let queryString = location.search
let obj = new URLSearchParams(queryString)
let palabraBuscada = obj.get("search")
console.log(palabraBuscada)
let result = document.querySelector(".result")
if (palabraBuscada == ''){
    result.innerText = "El campo esta vacio";
}else if (palabraBuscada.length < 3){
    result.innerText= 'el campo debe ser mayor a 3';
}
