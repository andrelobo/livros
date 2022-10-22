import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateLivros1666449529526 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({

                name: 'livros',
                columns: [

                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4() ',
                    },

                    {

                        name: 'nome',
                        type: 'varchar',

                    },

                    {

                        name: 'autor',
                        type: 'varchar',
                        isUnique: true,
                    },

                    {
                        name: 'genero',
                        type: 'varchar',
                    },

                    {
                        name: 'capa',
                        type: 'varchar',
                        isNullable: true,
                    },


                    {
                        name: 'created_at',
                        type: 'timestamp with time zone',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp with time zone',
                        default: 'now()',
                    },
                ],
            }),
        );

    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('livros');

    }

}
