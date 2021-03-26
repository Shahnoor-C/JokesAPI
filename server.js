const express = require ("express"); // tells the file to use express so we can have express features available in the variable
const cors = require("cors") //allows us to do cross-origin-resource-sharing so that this api can send and receive data to external sources
const mongoose = require('mongoose')
const port = 8000;// tells us what port to run on
const app = express();//create a variable called 'app' that is going to be an instance of an express server. We have express features available in the variable app 
app.use(cors());
app.use(express.json());


require("./server/config/jokes.config")
require("./server/routes/joke.routes")(app)
// const Joke = require("./server/models/joke.model")









app.get("/api",(req,res)=>{
    res.json({status:"Hello Jokes api with mongoose yattta!!"})
})

// app.get("/api/allJokes",(req,res)=>{
    
// })








app.listen(port,() => console.log(`Listening on port ${port}`))
