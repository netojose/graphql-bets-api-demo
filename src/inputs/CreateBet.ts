import { IsInt, IsNumber } from 'class-validator';
import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
export default class LoginInput {
    @Field(() => Int)
    @IsInt()
    userId!: number;

    @Field()
    @IsNumber()
    betAmount!: number;

    @Field()
    @IsNumber()
    chance!: number;
}
