import {getPromise} from '../api_call.js'
import {url_load} from '../url_parsing.js'

getPromise('/recipes_data')
.then((data) =>{
    var recipes = document.getElementById('recipes')
    for (var key in data){
        var recipeLink = document.createElement('a')
        recipeLink.className = 'max-width'
        recipeLink.href = '/recipes_result?recipe=' + url_load(key)
        recipeLink.innerText = key

        recipes.appendChild(recipeLink)
    }
})