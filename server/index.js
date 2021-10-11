const express = require("express")
const cors = require("cors")




//express invoked and stored in variable app
const app = express()
// Accept JSON object responses
app.use(express.json())
app.use(cors())



const friendsList = ['Dillon', 'Kajsia', 'Erin', 'Blaire', 'Alex', 'Garret']


//handler functions
app.get('/api/users', (req, res) => {
    let friends = ['Nitin', 'Eric', 'Jeddy', 'Cameron', 'Riley']
    res.status(200).send(friends)
})

app.get('/api/weather/:temperature', (req, res) => {
    const { temperature } = req.params
    const phrase = `<h3>It was ${req.params.temperature} today</h3>`
    res.status(200).send(phrase)
})




//Define the port we want to use for the project
app.listen(5502, () => console.log('Server running on port 5502'))