import { FilterableField, IDField } from '@nestjs-query/query-graphql';
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OrdemBancaria } from '../../ordens-bancarias/entities/ordem-bancaria.entity';

@ObjectType()
@Entity('empenhos')
export class Empenho {
  @IDField(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @FilterableField()
  @Column({ name: 'unidade_gestora' })
  unidadeGestora: number;

  @Field()
  @Column({ name: 'data_emissao' })
  dataEmissao: Date;

  @Field()
  @Column({ name: 'funcional_programatica', length: 255 })
  funcionalProgramatica: string;

  @Field()
  @Column({ length: 50, unique: true })
  numero: string;

  @Field()
  @Column({ name: 'numero_original', length: 50 })
  numeroOriginal: string;

  @Field()
  @Column({ name: 'valor_empenho', precision: 2 })
  valorEmpenho: number;

  @Field()
  @Column({ length: 100 })
  tipo: string;

  @Field()
  @Column({ length: 150 })
  modalidade: string;

  @Field()
  @Column({ name: 'numero_contrato', length: 100 })
  numeroContrato: string;

  @Field()
  @Column()
  exercicio: number;

  @Field()
  @Column({ name: 'numero_processo', length: 50 })
  numeroProcesso: string;

  @Field(() => GraphQLISODateTime)
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: Date;

  @Field(() => [OrdemBancaria], { nullable: true })
  @OneToMany(() => OrdemBancaria, (ordemBancaria) => ordemBancaria.empenho)
  @JoinColumn({ name: 'id', referencedColumnName: 'empenho_id' })
  ordensBancarias: OrdemBancaria[];
}
