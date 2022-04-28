import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { PostEntity } from '../entity/postEntity';

class PostsController {
    public async createPost(req: Request, res: Response) {
        const { title, body, authorId } = req.body;
        if (title !== undefined && body !== undefined && authorId !== undefined) {
            const post = await getManager()
                .getRepository(PostEntity)
                .save(req.body);
            res.json(post);
        } else res.send('required spaces are empty');
    }

    public async getPosts(req: Request, res: Response) {
        const posts = await getManager()
            .getRepository(PostEntity)
            .find({
                relations: ['comments'],
            });
        console.log('Request body :', req.body);
        console.log('Response :', posts);
        res.json(posts);
    }

    public async getPostById(req: Request, res: Response) {
        const { postId } = req.params;
        const post = await getManager()
            .getRepository(PostEntity)
            .findOne({
                where: { id: postId },
                relations: ['comments'],
            });
        if (post !== undefined) res.json(post);
        else res.send('no such post');
    }

    public async changePostById(req: Request, res: Response) {
        const { postId } = req.params;
        const { title, body } = req.body;
        if (title !== undefined && body !== undefined) {
            await getManager()
                .getRepository(PostEntity)
                .update({ id: Number(postId) }, { title, body });
            res.redirect('/posts');
        } else {
            res.send('title or body missing');
        }
    }

    public async deletePostById(req: Request, res: Response) {
        const { postId } = req.params;
        await getManager()
            .getRepository(PostEntity)
            .softDelete({ id: Number(postId) });
        res.redirect('/posts');
    }
}

export const postsController = new PostsController();
