import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  IDField,
  Relation,
} from '@nestjs-query/query-graphql';
import { Empenho } from '../../empenhos/entities/empenho.entity';

@ObjectType()
@Entity('ordens_bancarias')
@Relation('empenho', () => Empenho)
export class OrdemBancaria {
  @IDField(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @FilterableField()
  @Column({ name: 'numero_documento' })
  numeroDocumento: string;

  @FilterableField()
  @Column({ name: 'numero_documento_original' })
  numeroDocumentoOriginal: string;

  @FilterableField()
  @Column({ name: 'credor_identificacao' })
  credorIdentificacao: string;

  @FilterableField()
  @Column({ name: 'finalidade_pagamento' })
  finalidadePagamento: string;

  @FilterableField()
  @Column({ name: 'justificativa_estorno' })
  justificativaEstorno: string;

  @FilterableField()
  @Column({ name: 'numero_contrato' })
  numeroContrato: string;

  @FilterableField()
  @Column({ name: 'numero_convenio' })
  numeroConvenio: string;

  @FilterableField()
  @Column({ name: 'aditivo_convenio' })
  aditivoConvenio: string;

  @FilterableField()
  @Column({ name: 'iduso_fonte_recurso' })
  idusoFonteRecurso: string;

  @FilterableField()
  @Column({ name: 'situacao_ob' })
  situacaoOb: string;

  @FilterableField()
  @Column({ name: 'nota_fiscal' })
  notaFiscal: string;

  @FilterableField()
  @Column()
  beneficiarios: string;

  @FilterableField()
  @Column({ name: 'codigo_ug' })
  codigoUg: number;

  @FilterableField()
  @Column({ name: 'ug_favorecida' })
  ugFavorecida: number;

  @FilterableField()
  @Column({ name: 'versao_contrato' })
  versaoContrato: number;

  @FilterableField()
  @Column({ name: 'identificador_uso_codigo' })
  identificador_uso_codigo: number;

  @FilterableField()
  @Column({ name: 'valor_documento' })
  valorDocumento: number;

  @FilterableField()
  @Column({ name: 'data_emissao_documento' })
  dataEmissaoDocumento: Date;

  @FilterableField()
  @Column({ name: 'data_contabilizacao_documento' })
  dataContabilizacaoDocumento: Date;

  @FilterableField()
  @Column({ name: 'empenho_id' })
  empenhoId: number;

  @Field(() => GraphQLISODateTime)
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: Date;

  @Field(() => Empenho, { nullable: true })
  @ManyToOne(() => Empenho, (empenho) => empenho.ordensBancarias)
  @JoinColumn({ name: 'empenho_id', referencedColumnName: 'id' })
  empenho: Empenho;
}
