import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Orxan1645622982460 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'Orxan',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'title',
                    type: 'varchar',
                    width: 250,
                    isUnique: true,
                    isNullable: false,
                },
                {
                    name: 'body',
                    type: 'text',
                    isNullable: false,
                },
            ],
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Orxan', true);
    }
}
