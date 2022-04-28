import bcrypt from 'bcrypt';
import { IUser } from '../entity/userEntity';
import { userRepository } from '../repositories/user/userRepository';

class UserService {
    public async createUser(user: IUser): Promise<IUser> {
        const { password } = user;
        const hashedPassword = await this._hashPassword(password);
        const dataToSave = { ...user, password: hashedPassword };
        return userRepository.createUser(dataToSave);
    }

    public async requestUsersFromDbCanFilter(queries: any) {
        const queriesObject = queries;
        let queriesHadPassword = false;
        let users = await userRepository.getUsers();
        for (const key in queriesObject) {
            if (Object.hasOwnProperty.call(queriesObject, key)) {
                const value = queriesObject[key];
                if (key !== 'password') {
                    users = users.filter((user: any) => {
                        if (user[`${key}`] !== undefined) return user[`${key}`].toString() === value;
                        return undefined;
                    });
                } else queriesHadPassword = true;
            }
        }
        return queriesHadPassword ? 'Lol, want to find users by password? Nice try dude' : users;
    }

    public async checkUserByIdWithURL(userId: any) {
        const user = await userRepository.getUserById(userId);
        return (user !== undefined) ? user : 'user not found';
    }

    public async changePasswordOfUser(userId: any, password: any) {
        if (!password) return 'no pass field';
        const user = await userRepository.updateUserPassword(userId, password);
        return (user !== undefined) ? user : 'no such user';
    }

    public async deleteUser(userId: any) {
        await userRepository.deleteUser(userId);
        return `user with id ${userId} deleted`;
    }

    private async _hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 10);
    }
}

export const userService = new UserService();
