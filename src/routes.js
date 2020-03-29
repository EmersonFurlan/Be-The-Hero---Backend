const express  = require('express');

const SessionController = require('./controllers/SessionController');
const ProfileController = require('./controllers/ProfileController');
const IncidentController = require('./controllers/IncidentController');
const OngController = require('./controllers/OngController');

const routes =  express.Router();
/*  Login   */
routes.post('/sessions', SessionController.create);

/*  Profiles    */
routes.get('/profile', ProfileController.index);

/*  Ongs    */
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

/*  Incidents   */
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;