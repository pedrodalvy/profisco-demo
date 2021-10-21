import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateOrdensBancarias1634829173773 implements MigrationInterface {
  private table = new Table({
    name: 'ordens_bancarias',
    columns: [
      {
        name: 'id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'numero_documento',
        type: 'varchar',
        length: '50',
        isNullable: false,
        isUnique: true,
      },
      {
        name: 'numero_documento_original',
        type: 'varchar',
        length: '50',
        isNullable: true,
      },
      {
        name: 'credor_identificacao',
        type: 'varchar',
        length: '50',
        isNullable: true,
      },
      {
        name: 'finalidade_pagamento',
        type: 'varchar',
        isNullable: true,
      },
      {
        name: 'justificativa_estorno',
        type: 'varchar',
        isNullable: true,
      },
      {
        name: 'numero_contrato',
        type: 'varchar',
        length: '50',
        isNullable: true,
      },
      {
        name: 'numero_convenio',
        type: 'varchar',
        length: '50',
        isNullable: true,
      },
      {
        name: 'aditivo_convenio',
        type: 'varchar',
        length: '50',
        isNullable: true,
      },
      {
        name: 'iduso_fonte_recurso',
        type: 'varchar',
        length: '50',
        isNullable: true,
      },
      {
        name: 'situacao_ob',
        type: 'varchar',
        isNullable: true,
      },
      {
        name: 'nota_fiscal',
        type: 'varchar',
        length: '150',
        isNullable: true,
      },
      {
        name: 'beneficiarios',
        type: 'varchar',
        isNullable: true,
      },
      {
        name: 'codigo_ug',
        type: 'int',
        unsigned: true,
        isNullable: false,
      },
      {
        name: 'ug_favorecida',
        type: 'int',
        unsigned: true,
        isNullable: true,
      },
      {
        name: 'versao_contrato',
        type: 'int',
        unsigned: true,
        isNullable: true,
      },
      {
        name: 'identificador_uso_codigo',
        type: 'int',
        unsigned: true,
        isNullable: true,
      },
      {
        name: 'valor_documento',
        type: 'decimal',
        precision: 10,
        scale: 2,
        isNullable: true,
      },
      {
        name: 'data_emissao_documento',
        type: 'timestamp with time zone',
        isNullable: true,
      },
      {
        name: 'data_contabilizacao_documento',
        type: 'timestamp with time zone',
        isNullable: true,
      },
      {
        name: 'empenho_id',
        type: 'int',
        unsigned: true,
        isNullable: false,
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
    foreignKeys: [
      {
        name: 'ordens_bancarias_empenho_id_fk',
        columnNames: ['empenho_id'],
        referencedTableName: 'empenhos',
        referencedColumnNames: ['id'],
        onDelete: 'cascade',
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
