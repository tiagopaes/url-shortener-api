import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createUrlsTable1602639183011 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'urls',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'short_code',
          type: 'varchar',
        },
        {
          name: 'long_url',
          type: 'varchar',
        },
        {
          name: 'clicks_count',
          type: 'integer',
          default: 0
        },
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('urls');
  }
}
