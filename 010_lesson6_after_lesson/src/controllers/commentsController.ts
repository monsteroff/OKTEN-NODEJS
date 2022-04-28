import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { CommentEntity } from '../entity/commentEntity';

class PostsController {
    public async createComment(req: Request, res: Response) {
        const {
            title, body, authorId, postId,
        } = req.body;
        if (title !== undefined
            && body !== undefined
            && authorId !== undefined
            && postId !== undefined) {
            const comment = await getManager()
                .getRepository(CommentEntity)
                .save(req.body);
            res.json(comment);
        } else res.send('required spaces are empty');
    }

    public async getComments(req: Request, res: Response) {
        const comments = await getManager()
            .getRepository(CommentEntity)
            .find();
        res.json(comments);
    }

    public async getCommentById(req: Request, res: Response) {
        const { commentId } = req.params;
        const post = await getManager()
            .getRepository(CommentEntity)
            .findOne({
                where: { id: commentId },
            });
        if (post !== undefined) res.json(post);
        else res.send('no such comment');
    }

    public async changeCommentById(req: Request, res: Response) {
        const { commentId } = req.params;
        const { title, body } = req.body;
        if (title !== undefined && body !== undefined) {
            await getManager()
                .getRepository(CommentEntity)
                .update({ id: Number(commentId) }, { title, body });
            res.redirect('/comments');
        } else {
            res.send('title or body missing');
        }
    }

    public async deleteCommentById(req: Request, res: Response) {
        const { commentId } = req.params;
        await getManager()
            .getRepository(CommentEntity)
            .softDelete({ id: Number(commentId) });
        res.redirect('/comments');
    }
}

export const commentsController = new PostsController();
