const express = require("express")
const app = express()
const morgan = require("morgan")

//Middleware for every response
app.use(express.json())
app.use(morgan("dev"))

//routes
// 2. Set up a route for bounties


// Server Listen
app.listen(9000, () =>{
    console.log("The server is running on port 9000")
})