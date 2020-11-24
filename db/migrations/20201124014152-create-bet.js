'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('bets', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            userId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: 'users', key: 'id' }
            },
            betAmount: {
                allowNull: false,
                type: Sequelize.FLOAT
            },
            chance: {
                allowNull: false,
                type: Sequelize.FLOAT
            },
            payout: {
                allowNull: true,
                type: Sequelize.FLOAT
            },
            win: {
                allowNull: true,
                type: Sequelize.BOOLEAN
            }
        });
    },
    down: async queryInterface => {
        await queryInterface.dropTable('bets');
    }
};
