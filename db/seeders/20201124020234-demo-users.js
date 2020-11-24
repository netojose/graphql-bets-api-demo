'use strict';

module.exports = {
    up: async queryInterface => {
        await queryInterface.bulkInsert('users', [
            {
                id: 1,
                name: 'Paul McCartney',
                balance: 0.0
            },
            {
                id: 2,
                name: 'Oprah Winfrey',
                balance: 0.0
            },
            {
                id: 3,
                name: 'Donald Trump',
                balance: 0.0
            },
            {
                id: 4,
                name: 'Marie Curie',
                balance: 0.0
            },
            {
                id: 5,
                name: 'Leonardo Da vinci',
                balance: 0.0
            }
        ]);
    },

    down: async queryInterface => {
        await queryInterface.bulkDelete('users', null, {});
    }
};
