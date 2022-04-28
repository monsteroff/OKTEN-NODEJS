import {
    Column, Entity, JoinColumn, ManyToOne,
} from 'typeorm';

import { CommonEntity } from './commonEntity';
import { UserEntity } from './userEntity';
import { PostEntity } from './postEntity';

export interface IComment {
    title: string;
    body: string;
    authorId: number;
    postId: number;
}

@Entity('Comments', { database: 'lesson5hw' })
export class CommentEntity extends CommonEntity implements IComment {
    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
        title: string;

    @Column({
        type: 'text',
        nullable: false,
    })
        body: string;

    @Column({
        type: 'int',
        nullable: false,
    })
        authorId: number;

    @Column({
        type: 'int',
        nullable: false,
    })
        postId: number;

    @ManyToOne(() => UserEntity, (user) => user.comments)
    @JoinColumn({ name: 'authorId' })
        user: UserEntity;

    @ManyToOne(() => PostEntity, (post) => post.comments)
    @JoinColumn({ name: 'postId' })
        post: PostEntity;
}
