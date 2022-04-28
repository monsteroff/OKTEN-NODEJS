import { Request, Response, NextFunction } from 'express';
import { getManager } from 'typeorm';
import { UserEntity } from '../entity/userEntity';

async function isEmailFree(req: Request, res: Response, next: NextFunction) {
    try {
        const { email, phone, password } = req.body;
        const alreadyRegistered = await getManager()
            .getRepository(UserEntity)
            .findOne({
                where: [{ phone }, { email }],
                relations: ['posts', 'comments'],
            });
        if (alreadyRegistered !== undefined) throw new Error('Cannot register with this email or phone');
        if (!email || !password) throw new Error('Email or Password is not provided!');
        if (password.length < 6) throw new Error('Pass length');
        res.status(200);
        next();
    } catch (err: any) {
        res.status(400).send(err.message);
    }
}

const registerMiddleware = isEmailFree;

export { registerMiddleware };
