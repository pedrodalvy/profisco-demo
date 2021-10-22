import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
class ListaCredoresOrdemBancaria {
  @Field({ nullable: true })
  CredorOBLista: string;

  @Field({ nullable: true })
  Valor: number;

  @Field({ nullable: true })
  SituacaoPagamentoCredor: string;

  @Field({ nullable: true })
  NomeCompletoBeneficiario: string;

  @Field({ nullable: true })
  NumeroPedido: string;

  @Field({ nullable: true })
  TipoPedidoRelatorio: string;
}

@ObjectType()
class ItensOrdemBancaria {
  @Field({ nullable: true })
  NumeroLiquidacao: string;

  @Field({ nullable: true })
  NumeroRetencao: string;

  @Field({ nullable: true })
  NumeroEmpenho: string;

  @Field({ nullable: true })
  NumeroEmpenhoOriginal: string;

  @Field({ nullable: true })
  FuncionalProgramatica: string;

  @Field({ nullable: true })
  NaturezaDespesa: string;

  @Field({ nullable: true })
  ValorItem: number;

  @Field(() => [ListaCredoresOrdemBancaria], { nullable: true })
  ListaCredoresOrdemBancaria: ListaCredoresOrdemBancaria[];
}

@ObjectType()
export class OrdemBancariaSpfDto {
  @Field({ nullable: true })
  CodigoUG: number;

  @Field({ nullable: true })
  NumeroDocumento: string;

  @Field({ nullable: true })
  NumeroDocumentoOriginal: string;

  @Field({ nullable: true })
  CredorIdentificacaoFavorecida: string;

  @Field({ nullable: true })
  UGFavorecida: number;

  @Field({ nullable: true })
  DataEmissaoDocumento: Date;

  @Field({ nullable: true })
  DataContabilizacaoDocumento: Date;

  @Field({ nullable: true })
  FinalidadePagamento: string;

  @Field({ nullable: true })
  JustificativaEstorno: string;

  @Field({ nullable: true })
  NumeroContrato: number;

  @Field({ nullable: true })
  VersaoContrato: number;

  @Field({ nullable: true })
  NumeroConvenio: number;

  @Field({ nullable: true })
  AditivoConvenio: number;

  @Field({ nullable: true })
  IdentificadorUsoCodigo: number;

  @Field({ nullable: true })
  IdusoFonteRecurso: string;

  @Field({ nullable: true })
  ValorDocumento: number;

  @Field({ nullable: true })
  SituacaoOB: string;

  @Field(() => [ItensOrdemBancaria], { nullable: true })
  ItensOrdemBancaria: ItensOrdemBancaria[];
}
