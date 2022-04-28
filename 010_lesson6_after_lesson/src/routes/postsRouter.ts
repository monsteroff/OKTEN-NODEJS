import { Router } from 'express';
import { postsController } from '../controllers/postsController';

const postsRouter = Router();

// CREATE
postsRouter.post('/', postsController.createPost);

// READ
postsRouter.get('/', postsController.getPosts);
postsRouter.get('/:postId', postsController.getPostById);

// UPDATE
postsRouter.patch('/:postId', postsController.changePostById);

// DELETE
postsRouter.delete('/:postId', postsController.deletePostById);

export { postsRouter };
