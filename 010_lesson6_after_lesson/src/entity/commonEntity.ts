import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    PrimaryGeneratedColumn,
} from 'typeorm';

export interface ICommon {
    id: number;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string;
}

export class CommonEntity implements ICommon {
    @PrimaryGeneratedColumn()
        id: number;

    @Column({
        type: 'timestamp',
        nullable: false,
        default: Date.now(),
    })
    @CreateDateColumn({ type: 'timestamp' })
        createdAt: string;

    @Column({
        type: 'timestamp',
        nullable: false,
        default: Date.now(),
    })
    @CreateDateColumn({ type: 'timestamp' })
        updatedAt: string;

    @Column({ type: 'timestamp' })
    @DeleteDateColumn({ type: 'timestamp' })
        deletedAt?: string;
}
