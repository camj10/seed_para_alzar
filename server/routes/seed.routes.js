const { authenticate } = require('../config/jwc.config');

const SeedController = require('../controllers/seed.controller');
module.exports = function(app){
    app.get('/api',authenticate,  SeedController.index);
    app.post('/api/seed',authenticate,  SeedController.createSeed);
    app.get('/api/seed',authenticate, SeedController.getAllSeed);
    app.get('/api/seed/:id',authenticate, SeedController.getSeed)
    app.put('/api/seed/:id', SeedController.updateCantidad);
    app.delete('/api/seed/:id',authenticate, SeedController.deleteSeed);
}