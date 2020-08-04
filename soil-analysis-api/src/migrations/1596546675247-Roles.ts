import { MigrationInterface, QueryRunner } from 'typeorm';

export class Roles1596546675247 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const q1 = await queryRunner.query(
      `INSERT INTO user_role(role_name) VALUES ('admin'), ('tester'), ('guest');`,
    );
    const q2 = await queryRunner.query(
      `INSERT INTO user_permission(permission) VALUES ('manage users'), ('add soil data'), ('view soil results');`,
    );

    const adminRole = await queryRunner.query(
      `SELECT id FROM user_role WHERE role_name = 'admin'`,
    );
    const guestRole = await queryRunner.query(
      `SELECT id FROM user_role WHERE role_name = 'guest'`,
    );
    const testerRole = await queryRunner.query(
      `SELECT id FROM user_role WHERE role_name = 'tester'`,
    );

    const permission1 = await queryRunner.query(
      `SELECT id FROM user_permission WHERE permission = 'manage users'`,
    );
    const permission2 = await queryRunner.query(
      `SELECT id FROM user_permission WHERE permission = 'add soil data'`,
    );
    const permission3 = await queryRunner.query(
      `SELECT id FROM user_permission WHERE permission = 'view soil results'`,
    );
    await queryRunner.query(
      `INSERT INTO role_permission VALUES ('${adminRole[0].id}','${permission1[0].id}'), ('${adminRole[0].id}','${permission3[0].id}'), ('${guestRole[0].id}','${permission3[0].id}'), ('${testerRole[0].id}','${permission3[0].id}'), ('${testerRole[0].id}','${permission2[0].id}')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
