import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AuthSpfService } from './auth-spf.service';
import { spfConfig } from '../../config/spf.config';
import { lastValueFrom, map } from 'rxjs';
import { BuscarObSpfInput } from '../dto/buscar-ob-spf.input';
import { OrdemBancariaSpfDto } from '../dto/ordem-bancaria-spf.dto';

@Injectable()
export class BuscarObsSpfService {
  constructor(
    private httpService: HttpService,
    private authSpfService: AuthSpfService,
  ) {}

  public async buscar(
    inputData: BuscarObSpfInput,
  ): Promise<OrdemBancariaSpfDto[]> {
    const uri = spfConfig.recursos.ordensBancariasURI;
    const { baseURL } = spfConfig;
    const token = await this.authSpfService.getToken();

    const response = lastValueFrom(
      this.httpService
        .get(uri, { baseURL, params: { ...inputData, token } })
        .pipe(map((res) => res.data)),
    );

    return response
      .then((res) => <OrdemBancariaSpfDto[]>res.data)
      .catch(() => [new OrdemBancariaSpfDto()]);
  }
}
