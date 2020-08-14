import {url_parse, getQueryParams} from './url_parsing.js';
import {getPromise} from './api_call.js';

import {calculateSuggestedWeight} from './calculateSuggestedWeight.js'

async function addProgram(){
    var liftingData = await getPromise('/lifting_plan')
    const week = url_parse(getQueryParams('week', window.location.href));

    var body = document.getElementById('body')

    var flexbox = document.createElement('div')
    flexbox.className = 'flex-container'
    body.appendChild(flexbox)

    var days = liftingData['weeks']
    var progression = liftingData['weight projection'][week]
    var reps = progression['reps']
    var sets = progression['sets']
    var percentage = progression['percentage']

    for(var day in days){
        var mainLift = days[day]['main_lift']

        var dayHeader = document.createElement('h1')
        dayHeader.innerText = day
        flexbox.appendChild(dayHeader)

        var cards = document.createElement('div')
        cards.className = 'cards'
        flexbox.appendChild(cards)

        var card = document.createElement('div')
        card.className = 'card'
        cards.appendChild(card)

        var dayType = document.createElement('h2')
        dayType.innerText = days[day]['focus']
        card.appendChild(dayType)

        var workouts = days[day]['workouts']

        for(var i in workouts){
            var row = document.createElement('div')
            row.className = 'row'
            card.appendChild(row)


            var workoutDiv = document.createElement('div')
            workoutDiv.className = 'workout'
            var workout = document.createElement('h3')
            workout.innerText = workouts[i]['workout']
            workout.id = 'workout'
            workoutDiv.appendChild(workout)
            row.appendChild(workoutDiv)

            var suggestedWeightDiv = document.createElement('div')
            suggestedWeightDiv.className = 'suggestedWeight'
            var suggestWeight = document.createElement('h3')
            var weight = await calculateSuggestedWeight(mainLift, percentage)
            suggestWeight.innerText = weight 
            if(i == 0){
                suggestedWeightDiv.appendChild(suggestWeight)
            }
            row.appendChild(suggestedWeightDiv)

            var repSchemeDiv = document.createElement('div')
            repSchemeDiv.className = 'repScheme'
            var repScheme = document.createElement('p')
            if(reps == 'DELOAD'){
                repScheme.innerText = `DELOAD at ${percentage}%`
            }else{
                repScheme.innerText = `${sets}x${reps} at ${percentage}%`
            }
            repSchemeDiv.appendChild(repScheme)
            row.appendChild(repSchemeDiv)

           
        }
    }
}

addProgram()