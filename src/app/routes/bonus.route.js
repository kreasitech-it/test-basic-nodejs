const bonusController = require("../controllers/bonus.controller");
const router = require("express").Router();

module.exports = (app) => {
  router.get("/", bonusController.getAll);
  router.get("/:id", bonusController.getAll);

  app.use('/api/bonus', router);
};
