import { Field, InputType } from '@nestjs/graphql';
import {
  IsAlphanumeric,
  IsDateString,
  IsDecimal,
  IsInt,
  IsNumberString,
  IsOptional,
} from 'class-validator';

@InputType()
export class CreateOrdensBancariasInput {
  @Field()
  @IsAlphanumeric()
  numeroDocumento!: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsAlphanumeric()
  numeroDocumentoOriginal?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsNumberString()
  credorIdentificacao: string;

  @Field({ nullable: true })
  @IsOptional()
  finalidadePagamento: string;

  @Field({ nullable: true })
  @IsOptional()
  justificativaEstorno: string;

  @Field({ nullable: true })
  @IsOptional()
  numeroContrato: string;

  @Field({ nullable: true })
  @IsOptional()
  numeroConvenio: string;

  @Field({ nullable: true })
  @IsOptional()
  aditivoConvenio: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsNumberString()
  idusoFonteRecurso: string;

  @Field({ nullable: true })
  @IsOptional()
  situacaoOb: string;

  @Field({ nullable: true })
  @IsOptional()
  notaFiscal: string;

  @Field({ nullable: true })
  @IsOptional()
  beneficiarios: string;

  @Field()
  @IsInt()
  codigoUg!: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsInt()
  ugFavorecida: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsInt()
  versaoContrato: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsInt()
  identificador_uso_codigo: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsDecimal({ decimal_digits: '2' })
  valorDocumento: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsDateString()
  data_emissao_documento: Date;

  @Field({ nullable: true })
  @IsOptional()
  @IsDateString()
  dataContabilizacaoDocumento: Date;

  @Field({ nullable: true })
  @IsOptional()
  @IsInt()
  empenhoId!: number;
}
