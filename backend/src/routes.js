const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/creatdevs', DevController.store);

routes.get('/searchdevs', SearchController.index);

module.exports = routes;