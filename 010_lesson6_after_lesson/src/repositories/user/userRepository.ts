import { EntityRepository, getManager, Repository } from 'typeorm';
import { IUser, UserEntity } from '../../entity/userEntity';
import { IUserRepository } from './userRepository.interface';

@EntityRepository(UserEntity)
class UserRepository extends Repository<UserEntity> implements IUserRepository {
    public async createUser(user: IUser):Promise<IUser> {
        return getManager().getRepository(UserEntity).save(user);
    }

    public async getUsers() {
        return getManager()
            .getRepository(UserEntity)
            .find({
                relations: ['posts', 'comments'],
            });
    }

    public async getUserById(userId : any) {
        return getManager()
            .getRepository(UserEntity)
            .findOne({
                where: { id: userId },
                relations: ['posts', 'comments'],
            });
    }

    public async updateUserPassword(userId: any, password: any) {
        return getManager()
            .getRepository(UserEntity)
            .update({ id: Number(userId) }, { password });
    }

    public deleteUser(userId: any) {
        return getManager()
            .getRepository(UserEntity)
            .softDelete({ id: Number(userId) });
    }
}

export const userRepository = new UserRepository();
