module.exports = (sequelize, Sequelize) => {
    const Bonus = sequelize.define("bonus", {
        name: {
            type: Sequelize.STRING
        },
        amount: {
            type: Sequelize.INTEGER
        },
        description: {
            type: Sequelize.STRING
        },
    });
    return Bonus;
};