'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            balance: {
                type: Sequelize.FLOAT
            }
        });
    },
    down: async queryInterface => {
        await queryInterface.dropTable('users');
    }
};
