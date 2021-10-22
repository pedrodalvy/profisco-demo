import { Empenho } from '../entities/empenho.entity';

export class EmpenhoCreatedEvent {
  constructor(public empenho: Empenho) {}
}
