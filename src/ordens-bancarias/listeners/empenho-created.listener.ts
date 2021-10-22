import { Injectable } from '@nestjs/common';
import { EmpenhoCreatedEvent } from '../../empenhos/events/empenho-created.event';
import { OnEvent } from '@nestjs/event-emitter';
import { SincronizadorObSpfService } from '../services/sincronizador-ob-spf.service';
import { Empenho } from '../../empenhos/entities/empenho.entity';

@Injectable()
export class EmpenhoCreatedListener {
  constructor(private sincronizadorOrServicec: SincronizadorObSpfService) {}

  @OnEvent('empenho.created')
  async handleTest(event: EmpenhoCreatedEvent) {
    const empenho: Empenho = event.empenho;

    await this.sincronizadorOrServicec.sincronizarObs({
      unidadeGestoraCodigo: empenho.unidadeGestora,
      exercicio: empenho.exercicio,
      numeroEmpenho: empenho.numero,
    });
  }
}
