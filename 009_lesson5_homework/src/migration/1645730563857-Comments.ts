import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Comments1645730563857 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'Comments',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    isNullable: false,
                    generationStrategy: 'increment',
                },
                {
                    name: 'title',
                    type: 'varchar',
                    width: 255,
                    isNullable: false,
                },
                {
                    name: 'body',
                    type: 'text',
                    width: 255,
                    isNullable: false,
                },
                {
                    name: 'authorId',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'postId',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'createdAt',
                    type: 'timestamp',
                    default: 'now()',
                    isNullable: false,
                },
                {
                    name: 'updatedAt',
                    type: 'timestamp',
                    default: 'now()',
                    onUpdate: 'now()',
                },
                {
                    name: 'deletedAt',
                    type: 'timestamp',
                    isNullable: true,
                    default: null,
                },
            ],
            foreignKeys: [
                {
                    columnNames: ['authorId'],
                    referencedTableName: 'Users',
                    referencedColumnNames: ['id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
                {
                    columnNames: ['postId'],
                    referencedTableName: 'Posts',
                    referencedColumnNames: ['id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
            ],
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Comments', true);
    }
}
