'use strict';
module.exports = function(app) {

  var api = require('../controllers/APIControllers');
  // localhost:3000/api/getTicketBalance?address=0x972B4B46e0baBb59fE2cA41ef3D6aBFA2741623d
  app.get('/api/getTicketBalance',api.getTitketBalance);
  app.get('/api/getBalance',api.getBalance);
  app.get('/api/startMatch',api.startMatch);
  app.get('/api/getTop',api.getTop);
  app.post('/api/deposit',api.deposit);
  app.post('/api/withdraw',api.withdraw);
  app.post('/api/endMatch',api.endMatch);
};