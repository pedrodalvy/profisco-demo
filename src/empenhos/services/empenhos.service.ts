import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Empenho } from '../entities/empenho.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';

export class EmpenhosService extends TypeOrmQueryService<Empenho> {
  constructor(@InjectRepository(Empenho) repo: Repository<Empenho>) {
    super(repo);
  }

  createOne(record: DeepPartial<Empenho>): Promise<Empenho> {
    return super.createOne(record);
  }
}
