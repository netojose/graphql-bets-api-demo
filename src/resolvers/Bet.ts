import { Service } from 'typedi';
import { Resolver, Query, Mutation, Arg, Int, Args } from 'type-graphql';
import { UserInputError } from 'apollo-server-express';

import BetEntity from '../entities/Bet';
import BetService from '../services/Bet';
import UserService from '../services/User';
import CreateBetInput from '../inputs/CreateBet';

@Service()
@Resolver()
export default class BetResolver {
    constructor(private readonly betService: BetService, private readonly userService: UserService) {}

    @Query(() => BetEntity)
    async getBet(@Arg('id', () => Int) id: number): Promise<BetEntity> {
        return await this.betService.getById(id);
    }

    @Query(() => [BetEntity])
    async getBetList(): Promise<Array<BetEntity>> {
        return await this.betService.getAll();
    }

    @Query(() => [BetEntity])
    async getBestBetPerUser(@Arg('limit', () => Int, { nullable: true }) limit: number): Promise<Array<BetEntity>> {
        return await this.betService.getBestPerUser(limit);
    }

    @Mutation(() => BetEntity)
    async createBet(@Args() data: CreateBetInput): Promise<BetEntity> {
        const exists = await this.userService.userExists(data.userId);
        if (!exists) {
            throw new UserInputError('Invalid user id');
        }

        return await this.betService.create(data);
    }
}
