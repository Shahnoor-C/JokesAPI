const Joke = require("../models/joke.model")

// module.exports.findAllUsers = (req, res) => {
//     User.find()
//         .then(allDaUsers => res.json({ users: allDaUsers }))
//         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// }

module.exports.findAllJokes = (req,res) =>{
    Joke.find()
        .then(allJokes=> {
            console.log("SEARCHING FOR ALL QUOTES")
            res.json({results:allJokes})
        })
        .catch(err => res.json({errors:err}))
}


module.exports.createOneJoke = (req,res) =>{
    
    Joke.create(req.body)
        .then(newJoke => res.json({results:newJoke}))
        .catch(err=>res.json({errors:err}))
    // Joke.create(req.body)
    //     .then( newJoke => res.json(newJoke))
    //     .catch(err => res.json(err))
}

module.exports.findAJoke = (req,res)=>{
    Joke.findOne({_id:req.params.jokeid})
        .then(oneJoke => res.json({results:oneJoke}))
        .catch(err => res.json({errors:err}))
    // console.log("Coding can be very difficult!")
    // res.json({status:"Trying to radomize"})

    
}

module.exports.updateAJoke = (req,res)=>{
    Joke.findOneAndUpdate(
        {_id:req.params.jokeid},
        req.body,
        {new:true})
        .then(updatedJoke =>res.json({results:updatedJoke}))
        .catch(err => res.json({errors:err}))
}

module.exports.deleteAJoke = (req,res)=>{
    Joke.deleteOne({_id:req.params.jokeid})
        .then(deletedResult =>res.json({results:deletedResult}) )
        .catch(err => res.json ({errors:err}))

}

module.exports.randomAJoke = (req,res)=>{
    console.log("Randomizing....")
    Joke.find()
        .then(allJokes => {
            console.log("All jokes look like this",allJokes)
            let maxIndex = allJokes.length 
            //generate a random number between 0-3
            console.log(Math.random(maxIndex))
            function getRandomInt(max){
                return Math.floor(Math.random()* Math.floor(max))
            }
            let randomNum = getRandomInt(maxIndex)
            console.log("RANDOM INDEX IS THIS",randomNum)
            res.json({results:allJokes[randomNum]})
        })
        .catch()
    // res.json({status:"Trying to radomize"})

}

    // User.deleteOne({ _id: req.params.id })
    //     .then(result => res.json({ result: result }))
    //     .catch(err => res.json({ message: 'Something went wrong', error: err }));






    // Joke.findOne({_id:req.params.id})
    //     .then( oneJoke => res.json(oneJoke))
    //     .catch(err => res.json(err))

// module.exports.updateExistingUser = (req, res) => {
//     User.findOneAndUpdate(
//         { _id: req.params.id },
//         req.body,
//         { new: true, runValidators: true }
//     )
//         .then(updatedUser => res.json({ user: updatedUser }))
//         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// }





