const db = require("../models");
const Bonus = db.bonus;
const Op = db.Sequelize.Op;

exports.getAll = (whr) => {
    return Bonus.findAll({ where: whr });
}

exports.getById = (id) => {
    return Bonus.findByPk(id);
}