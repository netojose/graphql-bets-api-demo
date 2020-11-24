import UserEntity from '../entities/User';

export default class User {
    async getById(id: number): Promise<UserEntity> {
        return await UserEntity.findByPk(id);
    }

    async getAll(): Promise<Array<UserEntity>> {
        return await UserEntity.findAll();
    }

    async userExists(id: number): Promise<boolean> {
        const count = await UserEntity.count({ where: { id } });
        return count > 0;
    }
}
