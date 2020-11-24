import { Model, Optional, BelongsToGetAssociationMixin, Association, DataTypes } from 'sequelize';
import { ObjectType, Field, ID } from 'type-graphql';

import { getConnection } from '../utils/connection';
import User from './User';

interface BetAttributes {
    id: number;
    userId: number;
    betAmount: number;
    chance: number;
    payout: number;
    win: boolean;
}

interface BetCreationAttributes extends Optional<BetAttributes, 'id' | 'payout' | 'win'> {}

@ObjectType()
export default class Bet extends Model<BetAttributes, BetCreationAttributes> implements BetAttributes {
    @Field(() => ID)
    public id!: number;

    @Field(() => ID)
    public userId!: number;

    @Field()
    public betAmount!: number;

    @Field()
    public chance!: number;

    @Field({ nullable: true })
    public payout!: number;

    @Field({ nullable: true })
    public win!: boolean;

    public readonly user?: User;

    public geUser!: BelongsToGetAssociationMixin<User>;

    public static associations: {
        user: Association<Bet, User>;
    };
}

Bet.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        betAmount: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        chance: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        payout: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        win: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        }
    },
    {
        tableName: 'bets',
        timestamps: false,
        sequelize: getConnection()
    }
);
