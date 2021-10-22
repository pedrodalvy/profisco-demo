import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Empenho } from '../entities/empenho.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { EmpenhoCreatedEvent } from '../events/empenho-created.event';

export class EmpenhosService extends TypeOrmQueryService<Empenho> {
  constructor(
    @InjectRepository(Empenho) repo: Repository<Empenho>,
    private eventEmitter: EventEmitter2,
  ) {
    super(repo);
  }

  async createOne(record: DeepPartial<Empenho>): Promise<Empenho> {
    const empenho = await super.createOne(record);

    this.eventEmitter.emit('empenho.created', new EmpenhoCreatedEvent(empenho));

    return empenho;
  }
}
