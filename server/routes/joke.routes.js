const JokeController = require("../controllers/joke.controller")


module.exports = app =>{
    app.get("/api/jokes/all",JokeController.findAllJokes)
    app.post("/api/jokes/create",JokeController.createOneJoke)
    app.get("/api/jokes/random",JokeController.randomAJoke)
    app.get("/api/jokes/:jokeid",JokeController.findAJoke)
    app.put("/api/jokes/update/:jokeid",JokeController.updateAJoke)
    app.delete("/api/jokes/delete/:jokeid",JokeController.deleteAJoke)


}




// module.exports = app => {
//     app.get('/api/users', UserController.findAllUsers);
//     app.get('/api/users/:id', UserController.findOneSingleUser);
//     app.put('/api/users/:id', UserController.updateExistingUser);
//     app.post('/api/users', UserController.createNewUser);
//     app.delete('/api/users/:id', UserController.deleteAnExistingUser);
// }