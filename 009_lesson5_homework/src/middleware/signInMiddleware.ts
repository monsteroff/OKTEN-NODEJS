import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { UserEntity } from '../entity/userEntity';

async function isUserValid(req: Request, res: Response, next: any) {
    try {
        const { email, password } = req.body;
        const user = await getManager()
            .getRepository(UserEntity)
            .findOne({
                where: { email, password },
                relations: ['posts', 'comments'],
            }) || undefined;
        if (user === undefined) throw new Error('Email or Password is incorrect');
        next();
    } catch (err: any) {
        console.log(err.message);
        res.status(400).send(err.message);
    }
}

const signInMiddleware = isUserValid;

export { signInMiddleware };
