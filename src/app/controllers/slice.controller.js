const sliceService = require("../services/slice.service");

exports.count = (req, res) => {
    res.status(200).send({
        count: sliceService.count(req.body.string),
    });
    
    return;
};