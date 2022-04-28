import { IUser } from '../../entity/userEntity';

export interface IUserRepository {
    createUser(user: IUser):Promise<IUser>;
    getUsers():any;
    getUserById(userId : any):any;
    updateUserPassword(userId: any, password: any):any;
    deleteUser(userId: any):any;
}
