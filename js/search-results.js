document.addEventListener('DOMContentLoaded', () => {
    const searchTerm = new URLSearchParams(window.location.search).get('query');
    document.getElementById('search-term').textContent = searchTerm;

    fetch(`https://dummyjson.com/recipes/search?q=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
            const resultsContainer = document.getElementById('results');
            if (data.recipes.length > 0) {
                data.recipes.forEach(recipe => {
                    const recipeCard = document.createElement('div');
                    recipeCard.innerHTML = `
                        <img src="${recipe.image}" alt="${recipe.title}">
                        <h2>${recipe.title}</h2>
                        <a href="receta.html?id=${recipe.id}">Ver detalles</a>
                    `;
                    resultsContainer.appendChild(recipeCard);
                });
            } else {
                document.getElementById('no-results').style.display = 'block';
            }
        })
        .catch(error => console.error('Error al obtener los resultados:', error));
});
