import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateEmpenhos1634819841512 implements MigrationInterface {
  private table = new Table({
    name: 'empenhos',
    columns: [
      {
        name: 'id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'unidade_gestora',
        type: 'int',
        isNullable: true,
      },
      {
        name: 'data_emissao',
        type: 'timestamp with time zone',
        isNullable: true,
      },
      {
        name: 'funcional_programatica',
        type: 'varchar',
        length: '255',
        isNullable: true,
      },
      {
        name: 'numero',
        type: 'varchar',
        length: '50',
        isNullable: true,
      },
      {
        name: 'numero_original',
        type: 'varchar',
        length: '50',
        isNullable: true,
      },
      {
        name: 'valor_empenho',
        type: 'decimal',
        precision: 2,
        isNullable: true,
      },
      {
        name: 'tipo',
        type: 'varchar',
        length: '100',
        isNullable: true,
      },
      {
        name: 'modalidade',
        type: 'varchar',
        length: '150',
        isNullable: true,
      },
      {
        name: 'numero_contrato',
        type: 'varchar',
        length: '100',
        isNullable: true,
      },
      {
        name: 'exercicio',
        type: 'int',
        isNullable: true,
      },
      {
        name: 'numero_processo',
        type: 'varchar',
        length: '50',
        isNullable: true,
      },
      {
        name: 'created_at',
        type: 'timestamp with time zone',
        default: 'now()',
        isNullable: false,
      },
      {
        name: 'updated_at',
        type: 'timestamp with time zone',
        isNullable: true,
      },
      {
        name: 'deleted_at',
        type: 'timestamp with time zone',
        isNullable: true,
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
