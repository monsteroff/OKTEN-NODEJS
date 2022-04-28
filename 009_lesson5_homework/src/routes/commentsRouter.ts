import { Router } from 'express';
import { commentsController } from '../controllers/commentsController';

const commentsRouter = Router();

// CREATE
commentsRouter.post('/', commentsController.createComment);

// READ
commentsRouter.get('/', commentsController.getComments);
commentsRouter.get('/:commentId', commentsController.getCommentById);

// UPDATE
commentsRouter.patch('/:commentId', commentsController.changeCommentById);

// DELETE
commentsRouter.delete('/:commentId', commentsController.deleteCommentById);

export { commentsRouter };
