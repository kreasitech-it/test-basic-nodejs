const sliceController = require("../controllers/slice.controller");
const router = require("express").Router();

module.exports = (app) => {
  router.post("/", sliceController.count);

  app.use('/api/slice', router);
};
