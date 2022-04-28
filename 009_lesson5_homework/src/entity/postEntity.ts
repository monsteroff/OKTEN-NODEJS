import {
    Column, Entity, ManyToOne, JoinColumn, OneToMany,
} from 'typeorm';

import { CommonEntity } from './commonEntity';
import { UserEntity } from './userEntity';
import { CommentEntity } from './commentEntity';

export interface IPost {
    title: string;
    body: string;
    authorId: number;
}

@Entity('Posts', { database: 'lesson5hw' })
export class PostEntity extends CommonEntity implements IPost {
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

    @ManyToOne(() => UserEntity, (user) => user.posts)
    @JoinColumn({ name: 'authorId' })
        user: UserEntity;

    @OneToMany(() => CommentEntity, (comment) => comment.post)
        comments: CommentEntity[];
}
