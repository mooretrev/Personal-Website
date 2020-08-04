const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})

app.get('/', (req, res) =>{
    res.send('hello world')
})


