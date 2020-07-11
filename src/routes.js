const express = require("express");
const routes = express.Router();

const SessionController = require('./controllers/SessionController');
const UserController = require('./controllers/UserController');


const authMiddleware = require('./middlewares/auth');

// Session Routes
routes.post('/sessions', SessionController.store); // Sign Up a new user
routes.get('/sessions', SessionController.index); // Show all users in db
routes.delete('/sessions/:id', SessionController.delete); // Delete a specific user
routes.get('/deleteAllUsers', SessionController.deleteAll); // Delete all users
routes.post('/authenticate', SessionController.authenticate); // Sign In



routes.get('/', (req, res) => {
    res.send('Bem vindo ao server da Family Finances');
});

// Área restrita do usuário
routes.use(authMiddleware);
routes.get('/user', UserController.getId);
routes.post('/user', UserController.getUser);

module.exports = routes;