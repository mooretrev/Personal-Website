const express = require('express')
const path = require('path');
const { join } = require('path');
const positionSizePromise = require('td_ameritrade_api').positionSizePromise

const app = express()
const PORT = process.env.PORT || 5000
app.use('/public', express.static('public')) 
// app.use('/js', express.static('public'))



app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/powerlifting', (req, res) =>{
    res.sendFile(path.join(__dirname, 'html/powerlift_meets.html'))
})

app.get('/meet_results', (req, res) =>{
    res.sendFile(path.join(__dirname, '/html/meet_results.html'))
})

app.get('/program', (req, res)=>{
    res.sendFile(path.join(__dirname, '/html/program.html'))
})

app.get('/resume', (req, res) =>{
    res.sendFile(path.join(__dirname, '/html/resume.html'))
})

app.get('/recipes', (req, res) =>{
    res.sendFile(path.join(__dirname, '/html/recipes/recipes.html'))
})

app.get('/recipes_result', (req, res) =>{
    res.sendFile(path.join(__dirname, '/html/recipes/recipes_result.html'))
})

app.get('/stocks', (req, res) =>{
    res.sendFile(path.join(__dirname, 'html/stocks.html'))
})

//api send json
app.get('/meet_data', (req, res) =>{
    res.sendFile(path.join(__dirname, '/data/meet_data.json'))
})

app.get('/resume_data', (req, res) =>{
    res.sendFile(path.join(__dirname, '/data/resume_data.json'))
})

app.get('/lifting_plan', (req, res) =>{
    res.sendFile(path.join(__dirname, '/data/lifting_plan.json'))
})

app.get('/current_maxes', (req, res) =>{
    res.sendFile(path.join(__dirname, '/data/current_maxes.json'))
})

app.get('/recipes_data', (req, res) =>{
    res.sendFile(path.join(__dirname, '/data/recipes.json'))
})

app.get('/risk_calculator', (req, res) =>{
    positionSizePromise(req.query.ticker, req.query.stoploss)
    .then((data) =>{
        res.send(data)
    })
})

app.get('/pages', (req, res) =>{
    res.sendFile(path.join(__dirname, '/data/pages.json'))
})