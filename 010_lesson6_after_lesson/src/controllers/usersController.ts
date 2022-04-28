import { Request, Response } from 'express';
import { IUser } from '../entity/userEntity';
import { userService } from '../services/userService';

class UsersController {
    public async createUser(req: Request, res: Response): Promise<Response<IUser> > {
        const createdUser = await userService.createUser(req.body);
        return res.json(createdUser);
    }

    public async requestUsersFromDbCanFilter(req: Request, res: Response) {
        const users = await userService.requestUsersFromDbCanFilter(req.query);
        return res.json(users);
    }

    public async checkUserByIdWithURL(req: Request, res: Response) {
        const { userId } = req.params;
        const user = await userService.checkUserByIdWithURL(userId);
        return res.json(user);
    }

    public async changePasswordOfUser(req: Request, res: Response) {
        const { userId } = req.params;
        const { password } = req.body;
        const user = await userService.changePasswordOfUser(userId, password);
        res.json(user);
    }

    public async deleteUser(req: Request, res: Response) {
        const { userId } = req.params;
        const result = await userService.deleteUser(userId);
        res.send(result);
    }
}

export const usersController = new UsersController();
