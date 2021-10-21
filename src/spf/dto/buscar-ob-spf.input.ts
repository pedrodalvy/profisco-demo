import { Field, InputType } from '@nestjs/graphql';
import { IsDateString, IsNumber, IsString } from 'class-validator';

@InputType()
export class BuscarObSpfInput {
  @Field()
  @IsNumber()
  unidadeGestoraCodigo!: number;

  @Field()
  @IsNumber()
  exercicio!: number;

  @Field()
  @IsString()
  numeroEmpenho!: string;

  @Field({ nullable: true })
  @IsString()
  fonteRecurso?: string;

  @Field({ nullable: true })
  @IsDateString()
  dataInicial?: string;

  @Field({ nullable: true })
  @IsDateString()
  dataFinal?: string;
}
