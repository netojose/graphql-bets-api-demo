import { literal, fn, col } from 'sequelize';
import BetEntity from '../entities/Bet';

interface ICreateBet {
    userId: number;
    betAmount: number;
    chance: number;
}

export default class Bet {
    async getById(id: number): Promise<BetEntity> {
        return await BetEntity.findByPk(id);
    }

    async getAll(): Promise<Array<BetEntity>> {
        return await BetEntity.findAll();
    }

    async create(params: ICreateBet): Promise<BetEntity> {
        return await BetEntity.create(params);
    }

    async getBestPerUser(limit?: number): Promise<Array<BetEntity>> {
        return await BetEntity.findAll({
            group: 'userId',
            order: literal('maxChance DESC'),
            limit,
            attributes: [
                'id',
                'userId',
                'betAmount',
                'chance',
                'payout',
                'win',
                [fn('max', col('chance')), 'maxChance']
            ]
        });
    }
}
