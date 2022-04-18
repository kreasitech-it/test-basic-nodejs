const fiboController = require("../controllers/fibo.controller");
const router = require("express").Router();

module.exports = (app) => {
  router.post("/", fiboController.generate);

  app.use('/api/fibo', router);
};
