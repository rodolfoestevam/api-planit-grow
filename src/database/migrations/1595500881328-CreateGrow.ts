import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateGrow1595500881328 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'grows',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'growName',
                    type: 'varchar',
                },
                {
                    name: 'environmentType',
                    type: 'varchar',
                },
                {
                    name: 'growMedium',
                    type: 'varchar',
                },
                {
                    name: 'strainName',
                    type: 'varchar',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('grows')
    }

}
