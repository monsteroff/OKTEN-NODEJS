import { Router } from 'express';

import { authController } from '../controller/authController';
import { authMiddleware, fileMiddleware, userMiddleware } from '../middlewares';

const router = Router();

router.post('/registration', fileMiddleware.checkUserAvatar, authController.registration);
router.post('/login', authMiddleware.isLoginValid, userMiddleware.checkIsUserExist, authController.login);
router.post('/logout', authMiddleware.checkAccessToken, authController.logout);
router.post('/refresh', authMiddleware.checkRefreshToken, authController.refreshToken);

export const authRouter = router;
