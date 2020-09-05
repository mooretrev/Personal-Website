import {url_parse, getQueryParams} from '../url_parsing.js'
import {getPromise} from '../api_call.js'

getPromise('recipes_data')
.then((recipeData) =>{
    const recipeName = url_parse(getQueryParams('recipe', window.location.href));
    document.getElementById('recipe').innerText = recipeName
    document.getElementById('title').innerText = recipeName

    const flexbox = document.getElementById('flex-box')
    recipeData = recipeData[recipeName]

    for (var key in recipeData){
        var recipeHeader = document.createElement('h2')
        recipeHeader.innerText = key
        flexbox.appendChild(recipeHeader)

        var cards = document.createElement('div')
        cards.className = 'cards'

        var card = document.createElement('div')
        card.className = 'card'

        for (var key2 in recipeData[key]){
            var row = document.createElement('div')
            row.className = 'row'

            var ingredient = document.createElement('h3')
            ingredient.innerText = key2
            ingredient.className = 'ingredient'
            row.append(ingredient)

            var measurement = document.createElement('h3')
            measurement.innerText = recipeData[key][key2]
            measurement.className = 'measurement'
            row.append(measurement)

            card.appendChild(row)
        }
        cards.appendChild(card)
        flexbox.appendChild(cards)
    }

})

