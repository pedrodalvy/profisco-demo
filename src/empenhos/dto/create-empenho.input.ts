import { Field, InputType } from '@nestjs/graphql';
import {
  IsAlphanumeric,
  IsDateString,
  IsDecimal,
  IsInt,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class CreateEmpenhoInput {
  @Field()
  @IsNumber()
  unidadeGestora!: number;

  @Field()
  @IsDateString()
  dataEmissao: string;

  @Field()
  @IsNumberString()
  funcionalProgramatica: string;

  @Field()
  @IsAlphanumeric()
  numero: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsAlphanumeric()
  numeroOriginal?: string;

  @Field()
  @IsDecimal({ decimal_digits: '2' })
  valorEmpenho: number;

  @Field()
  @IsString()
  tipo: string;

  @Field()
  @IsString()
  modalidade: string;

  @Field()
  @IsInt()
  exercicio: number;

  @Field({ nullable: true })
  numeroContrato?: string;

  @Field({ nullable: true })
  numeroProcesso?: string;
}
