import {MigrationInterface, QueryRunner} from "typeorm";

export class createPerson1653042392867 implements MigrationInterface {
    name = 'createPerson1653042392867'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "person" ("id" SERIAL NOT NULL, "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "email" character varying, "phone_number" character varying, CONSTRAINT "UQ_d2d717efd90709ebd3cb26b936c" UNIQUE ("email"), CONSTRAINT "PK_5fdaf670315c4b7e70cce85daa3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "person"`);
    }

}
