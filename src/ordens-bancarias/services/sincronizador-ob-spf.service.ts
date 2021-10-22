import { Injectable } from '@nestjs/common';
import { BuscarObsSpfService } from '../../spf/services/buscar-obs-spf.service';
import { OrdemBancariaRepository } from '../repositories/ordem-bancaria.repository';
import { Empenho } from '../../empenhos/entities/empenho.entity';
import { OrdemBancariaSpfDto } from '../../spf/dto/ordem-bancaria-spf.dto';

@Injectable()
export class SincronizadorObSpfService {
  constructor(
    private buscarObsService: BuscarObsSpfService,
    private repository: OrdemBancariaRepository,
  ) {}

  async sincronizarObs(empenho: Empenho): Promise<void> {
    const ordensBancariasSpf = await this.buscarObsService.buscar({
      unidadeGestoraCodigo: empenho.unidadeGestora,
      exercicio: empenho.exercicio,
      numeroEmpenho: empenho.numero,
    });

    ordensBancariasSpf.map(async (obSpf) => {
      const numeroDocumento = obSpf.NumeroDocumento;

      const ordemBancaria =
        await this.repository.buscarOuCriarPorNumeroDocumento(numeroDocumento);

      ordemBancaria.empenhoId = empenho.id;
      ordemBancaria.numeroDocumentoOriginal = obSpf.NumeroDocumentoOriginal;
      ordemBancaria.credorIdentificacao = obSpf.CredorIdentificacaoFavorecida;
      ordemBancaria.finalidadePagamento = obSpf.FinalidadePagamento;
      ordemBancaria.justificativaEstorno = obSpf.JustificativaEstorno;
      ordemBancaria.numeroContrato = obSpf.NumeroContrato;
      ordemBancaria.numeroConvenio = obSpf.NumeroConvenio;
      ordemBancaria.aditivoConvenio = obSpf.AditivoConvenio;
      ordemBancaria.idusoFonteRecurso = obSpf.IdusoFonteRecurso;
      ordemBancaria.situacaoOb = obSpf.SituacaoOB;
      ordemBancaria.codigoUg = obSpf.CodigoUG;
      ordemBancaria.ugFavorecida = obSpf.UGFavorecida;
      ordemBancaria.versaoContrato = obSpf.VersaoContrato;
      ordemBancaria.identificadorUsoCodigo = obSpf.IdentificadorUsoCodigo;
      ordemBancaria.dataEmissaoDocumento = obSpf.DataEmissaoDocumento;
      ordemBancaria.valorDocumento = this.somarValorDocumento(obSpf);
      ordemBancaria.dataContabilizacaoDocumento =
        obSpf.DataContabilizacaoDocumento;

      await this.repository.save(ordemBancaria);
    });
  }

  somarValorDocumento(obSpf: OrdemBancariaSpfDto): number {
    return obSpf.ItensOrdemBancaria.reduce(
      (previous, current) => previous + (current.ValorItem || 0),
      0,
    );
  }
}
