const fiboService = require("../services/fibo.service");

exports.generate = (req, res) => {
    res.status(200).send({
        series: fiboService.generate(req.body.length),
    });
    
    return;
};