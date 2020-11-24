import { Model, HasManyGetAssociationsMixin, Association, DataTypes } from 'sequelize';
import { ObjectType, Field, ID } from 'type-graphql';

import { getConnection } from '../utils/connection';
import Bet from './Bet';

interface UserAttributes {
    id: number;
    name: string;
    balance: number;
}

@ObjectType()
export default class User extends Model<UserAttributes> implements UserAttributes {
    @Field(() => ID)
    public id!: number;

    @Field()
    public name!: string;

    @Field()
    public balance!: number;

    public readonly bets?: Bet[];

    public getBets!: HasManyGetAssociationsMixin<Bet>;

    public static associations: {
        bets: Association<User, Bet>;
    };
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: new DataTypes.STRING(128),
            allowNull: false
        },
        balance: {
            type: new DataTypes.STRING(128),
            allowNull: true
        }
    },
    {
        tableName: 'users',
        timestamps: false,
        sequelize: getConnection()
    }
);
