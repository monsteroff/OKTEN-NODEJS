import { Column, Entity, OneToMany } from 'typeorm';

import { CommonEntity } from './commonEntity';
import { PostEntity } from './postEntity';
import { CommentEntity } from './commentEntity';

export interface IUser {
    firstName: string;
    lastName: string;
    age: number;
    phone: string;
    email: string;
    password: string;
}

@Entity('Users', { database: 'lesson5hw' })
export class UserEntity extends CommonEntity implements IUser {
    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
        firstName: string;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
        lastName: string;

    @Column({
        type: 'int',
        nullable: false,
    })
        age: number;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
        unique: true,
    })
        phone: string;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
        unique: true,
    })
        email: string;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
        password: string;

    @OneToMany(() => PostEntity, (post) => post.user)
        posts: PostEntity[];

    @OneToMany(() => CommentEntity, (comment) => comment.user)
        comments: CommentEntity[];
}
