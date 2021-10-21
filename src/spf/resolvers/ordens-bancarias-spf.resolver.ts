import { Args, Query, Resolver } from '@nestjs/graphql';
import { OrdemBancariaSpfDto } from '../dto/ordem-bancaria-spf.dto';
import { BuscarObsSpfService } from '../services/buscar-obs-spf.service';
import { BuscarObSpfInput } from '../dto/buscar-ob-spf.input';

@Resolver(() => OrdemBancariaSpfDto)
export class OrdensBancariasSpfResolver {
  constructor(private buscarObsService: BuscarObsSpfService) {}

  @Query(() => [OrdemBancariaSpfDto], { name: 'buscarObsSpf' })
  public async buscarOrdensBancarias(
    @Args('inputData') inputData: BuscarObSpfInput,
  ): Promise<OrdemBancariaSpfDto[]> {
    return await this.buscarObsService.buscar(inputData);
  }
}
