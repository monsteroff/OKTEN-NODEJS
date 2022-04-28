import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Users1645721505513 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'Users',
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
                    name: 'firstName',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'lastName',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'age',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'phone',
                    type: 'varchar',
                    isNullable: false,
                    isUnique: true,
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isNullable: false,
                    isUnique: true,
                },
                {
                    name: 'password',
                    type: 'varchar',
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
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Users', true);
    }
}
