import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { UserEntity } from '../entity/userEntity';

class SignInController {
    async checkSignIn(req: Request, res: Response) {
        const users = await getManager()
            .getRepository(UserEntity)
            .find({
                relations: ['posts', 'comments'],
            });
        const nomerZakluchennoqo = users
            .findIndex((u: any) => u.email === req.body.email && u.password === req.body.password);
        if (nomerZakluchennoqo === -1) res.send('user with mentioned email and password non existent');
        else res.send(users[nomerZakluchennoqo]);
    }
}

export const signInController = new SignInController();
