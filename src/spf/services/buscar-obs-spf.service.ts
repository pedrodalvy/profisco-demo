import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AuthSpfService } from './auth-spf.service';
import { spfConfig } from '../../config/spf.config';
import { lastValueFrom } from 'rxjs';
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
    const token = await this.authSpfService.getToken();

    const response = await lastValueFrom(
      this.httpService.get(uri, {
        baseURL: spfConfig.baseURL,
        params: { ...inputData, token },
      }),
    );

    const responseData = await response.data;
    return <OrdemBancariaSpfDto[]>responseData.data;
  }
}
