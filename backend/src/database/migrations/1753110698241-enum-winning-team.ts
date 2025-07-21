import { MigrationInterface, QueryRunner } from "typeorm";

export class EnumWinningTeam1753110698241 implements MigrationInterface {
    name = 'EnumWinningTeam1753110698241'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bet" DROP COLUMN "winning_team"`);
        await queryRunner.query(`CREATE TYPE "public"."bet_winning_team_enum" AS ENUM('team1', 'team2', 'draw')`);
        await queryRunner.query(`ALTER TABLE "bet" ADD "winning_team" "public"."bet_winning_team_enum" NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bet" DROP COLUMN "winning_team"`);
        await queryRunner.query(`DROP TYPE "public"."bet_winning_team_enum"`);
        await queryRunner.query(`ALTER TABLE "bet" ADD "winning_team" character varying NOT NULL`);
    }

}
