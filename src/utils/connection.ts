import path from 'path';
import { Sequelize } from 'sequelize';

let sequelize: Sequelize = null;

export async function connect(): Promise<never | void> {
    const { DB_FILE } = process.env;
    sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: path.join(__dirname, '..', '..', DB_FILE)
    });

    try {
        await sequelize.authenticate();
    } catch (error) {
        console.error(error);
        throw 'Unable to connect to the database';
    }
}

export function getConnection(): Sequelize | null {
    if (sequelize === null) {
        throw 'The connection is not established';
    }

    return sequelize;
}
