import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1753109184703 implements MigrationInterface {
    name = 'Init1753109184703'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "team" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "logoUrl" character varying NOT NULL, CONSTRAINT "PK_f57d8293406df4af348402e4b74" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."event_result_enum" AS ENUM('team1', 'team2', 'draw')`);
        await queryRunner.query(`CREATE TYPE "public"."event_status_enum" AS ENUM('programado', 'finalizado', 'cancelado')`);
        await queryRunner.query(`CREATE TABLE "event" ("id" SERIAL NOT NULL, "date" TIMESTAMP NOT NULL, "result" "public"."event_result_enum" NOT NULL, "status" "public"."event_status_enum" NOT NULL, "place" character varying NOT NULL, "team1_id" integer, "team2_id" integer, CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."bet_status_enum" AS ENUM('pending', 'won', 'lost')`);
        await queryRunner.query(`CREATE TABLE "bet" ("id" SERIAL NOT NULL, "winning_team" character varying NOT NULL, "amount" integer NOT NULL, "date" TIMESTAMP NOT NULL, "status" "public"."bet_status_enum" NOT NULL, "event_id" integer, "user_id" integer, CONSTRAINT "PK_4ceea2cdef435807614b8e17aed" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "balance" integer NOT NULL DEFAULT '100', "username" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_e6cb505dc08f05706416970ad79" FOREIGN KEY ("team1_id") REFERENCES "team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_eecc9494b94e9020bd7ea81c64b" FOREIGN KEY ("team2_id") REFERENCES "team"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bet" ADD CONSTRAINT "FK_d0db616ca49c322e9b1b01f94c0" FOREIGN KEY ("event_id") REFERENCES "event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bet" ADD CONSTRAINT "FK_6bdc104d1a93c73245755da4684" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bet" DROP CONSTRAINT "FK_6bdc104d1a93c73245755da4684"`);
        await queryRunner.query(`ALTER TABLE "bet" DROP CONSTRAINT "FK_d0db616ca49c322e9b1b01f94c0"`);
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_eecc9494b94e9020bd7ea81c64b"`);
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_e6cb505dc08f05706416970ad79"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "bet"`);
        await queryRunner.query(`DROP TYPE "public"."bet_status_enum"`);
        await queryRunner.query(`DROP TABLE "event"`);
        await queryRunner.query(`DROP TYPE "public"."event_status_enum"`);
        await queryRunner.query(`DROP TYPE "public"."event_result_enum"`);
        await queryRunner.query(`DROP TABLE "team"`);
    }

}
