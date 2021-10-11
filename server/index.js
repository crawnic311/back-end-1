const express = require('express')



//express invoked and stored in variable app
const app = express()



// Accept JSON object responses
app.use(express.json())



app.get('/api/users', (req, res) => {

})





//Define the port we want to use for the project
app.listen(5501, () => console.log('Server running on port 5501'))