import { BuscarEmpenhosSpfService } from '../services/buscar-empenhos-spf.service';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { BuscarEmpenhosSpfInput } from '../dto/buscar-empenhos-spf.input';
import { EmpenhoSpfDto } from '../dto/empenho-spf.dto';

@Resolver(() => EmpenhoSpfDto)
export class EmpenhosSpfResolver {
  constructor(private buscarEmpenhosService: BuscarEmpenhosSpfService) {}

  @Query(() => [EmpenhoSpfDto], { name: 'buscarEmpenhosSpf' })
  public async buscarEmpenhos(
    @Args('inputData') inputData: BuscarEmpenhosSpfInput,
  ): Promise<EmpenhoSpfDto[]> {
    return await this.buscarEmpenhosService.buscar(inputData);
  }
}
