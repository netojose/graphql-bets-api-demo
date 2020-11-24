import { Service } from 'typedi';
import { Resolver, Query, Arg, Int } from 'type-graphql';

import UserEntity from '../entities/User';
import UserService from '../services/User';

@Service()
@Resolver()
export default class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => UserEntity)
    async getUser(@Arg('id', () => Int) id: number): Promise<UserEntity> {
        return await this.userService.getById(id);
    }

    @Query(() => [UserEntity])
    async getUserList(): Promise<Array<UserEntity>> {
        return await this.userService.getAll();
    }
}
