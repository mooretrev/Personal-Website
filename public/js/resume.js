import {get} from './api_call.js'
const view = document.getElementById('view')

get('/resume_data', (data) =>{
    const flexcontainer = document.createElement('div')
    flexcontainer.className = 'flex-container'

    addInternships(flexcontainer, data['internship'])
    addProjects(flexcontainer, data['project'])

})

const addProjects = (flexcontainer, projects) => {
    const heading = document.createElement('h1')
    heading.innerText = 'Projects'
    flexcontainer.appendChild(heading)

    const cards = document.createElement('div')
    cards.className = 'cards'

    for(var key in projects){
        const card = document.createElement('div')
        card.className = 'card'
        const company = document.createElement('div')
        company.className = 'company'
        const companyName = document.createElement('h2')
        companyName.innerText = key
        company.appendChild(companyName)
        card.appendChild(company)

        const row = document.createElement('div')
        row.className = 'row'

        const position = document.createElement('div')
        position.className = 'position'
        const positionText = document.createElement('h3')
        positionText.innerText = projects[key]['sponser']
        position.appendChild(positionText)
        row.appendChild(position)

        const time = document.createElement('div')
        time.className = 'time'
        const timeText = document.createElement('p')
        timeText.innerText = projects[key]['position']
        time.appendChild(timeText)
        row.appendChild(time)
        card.appendChild(row)

        const br = document.createElement('br')
        card.append(br)

        const description = document.createElement('div')
        description.className = 'description'
        const ul = document.createElement('ul')

        for(var i in projects[key]['description']){
            const li = document.createElement('li')
            li.innerText = projects[key]["description"][i]
            ul.appendChild(li)
        }
        description.appendChild(ul)
        card.appendChild(description)

        cards.append(card)
    }

    flexcontainer.appendChild(cards)
    view.appendChild(flexcontainer)


}

const addInternships = (flexcontainer, internship) =>{
    const internshipHeading = document.createElement('h1')
    internshipHeading.innerText = 'Internships'
    flexcontainer.appendChild(internshipHeading)

    const cards = document.createElement('div')
    cards.className = 'cards'

    for(var key in internship){
        const card = document.createElement('div')
        card.className = 'card'
        const company = document.createElement('div')
        company.className = 'company'
        const companyName = document.createElement('h2')
        companyName.innerText = key
        company.appendChild(companyName)
        card.appendChild(companyName)

        const row = document.createElement('div')
        row.className = 'row'

        const position = document.createElement('div')
        position.className = 'position'
        const positionText = document.createElement('h3')
        positionText.innerText = internship[key]['position']
        position.appendChild(positionText)
        row.appendChild(position)

        const time = document.createElement('div')
        time.className = 'time'
        const timeText = document.createElement('p')
        timeText.innerText = internship[key]['time']
        time.appendChild(timeText)
        row.appendChild(time)
        card.appendChild(row)

        const br = document.createElement('br')
        card.append(br)

        const description = document.createElement('div')
        description.className = 'description'
        const ul = document.createElement('ul')

        for(var i in internship[key]['description']){
            const li = document.createElement('li')
            li.innerText = internship[key]["description"][i]
            ul.appendChild(li)
        }

        description.appendChild(ul)
        card.appendChild(description)
        
        cards.appendChild(card)
    }

    flexcontainer.appendChild(cards)
    view.appendChild(flexcontainer)
}

