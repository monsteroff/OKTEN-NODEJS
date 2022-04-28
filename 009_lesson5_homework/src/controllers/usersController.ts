import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { UserEntity } from '../entity/userEntity';

class UsersController {
    public async checkAndRegister(req: Request, res: Response) {
        const user = await getManager()
            .getRepository(UserEntity)
            .save(req.body);
        res.json(user);
    }

    public async requestUsersFromDbCanFilter(req: Request, res: Response) {
        let filteredUsers = await getManager()
            .getRepository(UserEntity)
            .find({
                relations: ['posts', 'comments'],
            });
        const obj = req.query;
        let queryHadPassword = false;
        for (const key in obj) {
            if (Object.hasOwnProperty.call(obj, key)) {
                const value = obj[key];
                if (key !== 'password') {
                    filteredUsers = filteredUsers.filter((user: any) => {
                        if (user[`${key}`] !== undefined) {
                            return user[`${key}`].toString() === value;
                        } return undefined;
                    });
                } else queryHadPassword = true;
            }
        }
        if (queryHadPassword) {
            console.log('Lol, want to find users by password? Nice try dude');
            res.send('Lol, want to find users by password? Nice try dude');
        } else res.json(filteredUsers);
    }

    public async checkUserByIdWithURL(req: Request, res: Response) {
        const { userId } = req.params;
        const user = await getManager()
            .getRepository(UserEntity)
            .findOne({
                where: { id: userId },
                relations: ['posts', 'comments'],
            });
        console.log(user);
        if (user !== undefined) res.json(user);
        else res.send('user not found');
    }

    public async changePasswordOfUser(req: Request, res: Response) {
        const { userId } = req.params;
        const { password } = req.body;
        const user = await getManager()
            .getRepository(UserEntity)
            .update({ id: Number(userId) }, { password });
        if (user !== undefined) res.json(user);
        else res.json('no such user');
    }

    public async deleteUserById(req: Request, res: Response) {
        const { userId } = req.params;
        await getManager()
            .getRepository(UserEntity)
            .softDelete({ id: Number(userId) });
        res.send(`user with id ${userId} deleted`);
    }
}

export const usersController = new UsersController();
