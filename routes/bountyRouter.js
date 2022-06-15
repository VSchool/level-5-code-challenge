const express = require("express")
const bountyRouter = express.Router()

// fake data
const bounties = [
    {firstname:"Darth", lastname: "Vader", living: true, bounty:"9000", type:"Sith", _id: "1" },
    {firstname:"Obi-wan", lastname: "Kenobi", living: true, bounty:"7000", type:"Jedi", _id: "2" },
    {firstname:"Luke", lastname: "Skywalker", living: true, bounty:"5000", type:"Jedi", _id: "3" },
    {firstname:"Darth", lastname: "Maul", living: false, bounty:"7000", type:"Sith", _id: "4" },
    {firstname:"Darth", lastname: "Sidious", living: false, bounty:"10000", type:"Sith", _id: "5" },
]
    
// Routes
// get all
// 2. Send bounty data through server, back to the front end 


module.exports = bountyRouter