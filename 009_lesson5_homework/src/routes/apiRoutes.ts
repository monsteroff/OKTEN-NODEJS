import { Request, Response, Router } from 'express';
import { usersRouter } from './usersRouter';
import { postsRouter } from './postsRouter';
import { commentsRouter } from './commentsRouter';
import { signInRouter } from './signInRouter';

const apiRoutes = Router();

apiRoutes.use('/signIn', signInRouter);
apiRoutes.use('/users', usersRouter);
apiRoutes.use('/posts', postsRouter);
apiRoutes.use('/comments', commentsRouter);
apiRoutes.use((req : Request, res: Response) => {
    res.send('No such link');
});

export { apiRoutes };
