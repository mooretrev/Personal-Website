const express = require('express')
const path = require('path');

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

app.get('/resume', (req, res) =>{
    res.sendFile(path.join(__dirname, '/html/resume.html'))
})

//api send json
app.get('/meet_data', (req, res) =>{
    res.sendFile(path.join(__dirname, '/data/meet_data.json'))
})

app.get('/resume_data', (req, res) =>{
    res.sendFile(path.join(__dirname, '/data/resume_data.json'))
})