import { EntityRepository, Repository } from 'typeorm';
import { OrdemBancaria } from '../entities/ordem-bancaria.entity';

@EntityRepository(OrdemBancaria)
export class OrdemBancariaRepository extends Repository<OrdemBancaria> {
  public async buscarOuCriarPorNumeroDocumento(
    numeroDocumento: string,
  ): Promise<OrdemBancaria> {
    let ordemBancaria = await this.findOne({ where: { numeroDocumento } });

    if (!ordemBancaria) {
      ordemBancaria = this.create({ numeroDocumento });
    }

    return ordemBancaria;
  }
}
