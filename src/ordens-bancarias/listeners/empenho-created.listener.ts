import { Injectable } from '@nestjs/common';
import { EmpenhoCreatedEvent } from '../../empenhos/events/empenho-created.event';
import { OnEvent } from '@nestjs/event-emitter';
import { SincronizadorObSpfService } from '../services/sincronizador-ob-spf.service';

@Injectable()
export class EmpenhoCreatedListener {
  constructor(private sincronizadorOrServicec: SincronizadorObSpfService) {}

  @OnEvent('empenho.created')
  async handleTest(event: EmpenhoCreatedEvent) {
    await this.sincronizadorOrServicec.sincronizarObs(event.empenho);
  }
}
