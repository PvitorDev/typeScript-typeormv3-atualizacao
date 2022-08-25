import { MigrationInterface, QueryRunner } from "typeorm";

export class default1661441133612 implements MigrationInterface {
    name = 'default1661441133612'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "subjects" ("id" SERIAL NOT NULL, "name" text NOT NULL, CONSTRAINT "PK_1a023685ac2b051b4e557b0b280" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "room_subject" ("room_id" integer NOT NULL, "subjects_id" integer NOT NULL, CONSTRAINT "PK_6ef61aff4bc9dfc40efc09cc9f3" PRIMARY KEY ("room_id", "subjects_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_f227421d2ef64ab086261ac07f" ON "room_subject" ("room_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_072c5fc262005e27e67d855398" ON "room_subject" ("subjects_id") `);
        await queryRunner.query(`ALTER TABLE "rooms" ADD "description" text`);
        await queryRunner.query(`ALTER TABLE "room_subject" ADD CONSTRAINT "FK_f227421d2ef64ab086261ac07fd" FOREIGN KEY ("room_id") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "room_subject" ADD CONSTRAINT "FK_072c5fc262005e27e67d8553984" FOREIGN KEY ("subjects_id") REFERENCES "rooms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "room_subject" DROP CONSTRAINT "FK_072c5fc262005e27e67d8553984"`);
        await queryRunner.query(`ALTER TABLE "room_subject" DROP CONSTRAINT "FK_f227421d2ef64ab086261ac07fd"`);
        await queryRunner.query(`ALTER TABLE "rooms" DROP COLUMN "description"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_072c5fc262005e27e67d855398"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f227421d2ef64ab086261ac07f"`);
        await queryRunner.query(`DROP TABLE "room_subject"`);
        await queryRunner.query(`DROP TABLE "subjects"`);
    }

}
