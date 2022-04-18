const bonusService = require("../services/bonus.service");
const db = require("../models");
const Bonus = db.bonus;
const Op = db.Sequelize.Op;

exports.getAll = (req, res) => {
    const whr = req.query.name ? { name: { [Op.like]: `%${req.query.name}%` } } : null;

    bonusService.getAll(whr)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message,
            });
        });

    return;
};