import {getPromise} from './api_call.js';
import {url_load} from './url_parsing.js';

var body = document.getElementById('body');

var flexbox = document.createElement('div')
flexbox.className = 'flex-container'
body.appendChild(flexbox)

var meetHeader = document.createElement('h1')
meetHeader.innerText = "Meet Dates"
flexbox.appendChild(meetHeader)

var cards = document.createElement('div')
cards.className = 'cards'
flexbox.appendChild(cards)

var card = document.createElement('div')
card.className = 'card'
cards.appendChild(card)


getPromise('/meet_data')
.then((json)=>{
    var dates = json.dates;
    for(var i = 0; i < dates.length; i++){
        var anchor = document.createElement('a');
        anchor.href = './meet_results?date=' + url_load(dates[i]);
        anchor.innerText = dates[i];
        card.appendChild(anchor);
    }

    return  getPromise('/lifting_plan')
})
.then((data) =>{
    var programHeader = document.createElement('h1')
    programHeader.innerText = "Program"
    flexbox.appendChild(programHeader)

    var cards = document.createElement('div')
    cards.className = 'cards'
    flexbox.appendChild(cards)

    var card = document.createElement('div')
    card.className = 'card'
    cards.appendChild(card)

    var weeks = data['weight projection']
        for(var week in weeks){
            var anchor = document.createElement('a');
            anchor.href = './program?week=' + url_load(week);
            anchor.innerText = week;
            card.appendChild(anchor); 
        }

    return getPromise('/current_maxes')
})
.then((maxes) =>{
    var maxesByRepHeader = document.createElement('h1')
    maxesByRepHeader.innerText = 'Maxes By Reps'
    flexbox.appendChild(maxesByRepHeader)

    var cardsRepsMax = document.createElement('div')
    cardsRepsMax.className = 'cards'
    flexbox.appendChild(cardsRepsMax)

    for(var lift in maxes['maxesByRep']){
        var cardLift = document.createElement('div')
        cardLift.className = 'card'
        cardsRepsMax.appendChild(cardLift)

        const liftDiv = document.createElement('div')
        liftDiv.className = 'lift'
        const liftHeader = document.createElement('h2')
        liftHeader.innerText = lift
        cardLift.appendChild(liftHeader)

        var repMaxes = maxes['maxesByRep'][lift]
        for(var rep in repMaxes){
            var row = document.createElement('row')
            row.className = 'row'
            cardLift.appendChild(row)

            var repContent = document.createElement('h3')
            repContent.className = 'repContent'
            repContent.innerText = `Rep: ${rep}`
            row.appendChild(repContent)

            var weightContent = document.createElement('h3')
            weightContent.className = 'weightContent'
            weightContent.innerText = repMaxes[rep]
            row.appendChild(weightContent)

            cardLift.appendChild(row)
        }

    }
})
.catch((err) =>{console.log(err)})