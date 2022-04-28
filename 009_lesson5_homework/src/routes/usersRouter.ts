import { Router } from 'express';
import { usersController } from '../controllers/usersController';
import { registerMiddleware } from '../middleware/registerMiddleware';

const usersRouter = Router();

// CREATE
usersRouter.post('/', registerMiddleware, usersController.checkAndRegister);

// READ
usersRouter.get('/', usersController.requestUsersFromDbCanFilter);
usersRouter.get('/:userId', usersController.checkUserByIdWithURL);

// UPDATE
usersRouter.patch('/:userId', usersController.changePasswordOfUser);

// DELETE
usersRouter.delete('/:userId', usersController.deleteUserById);

export { usersRouter };
