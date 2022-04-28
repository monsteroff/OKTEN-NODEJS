import { Router } from 'express';
import { signInController } from '../controllers/signInController';
import { signInMiddleware } from '../middleware/signInMiddleware';

const signInRouter = Router();

signInRouter.post('/', signInMiddleware, signInController.checkSignIn);

export { signInRouter };
