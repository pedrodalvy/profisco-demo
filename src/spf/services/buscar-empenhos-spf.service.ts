import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AuthSpfService } from './auth-spf.service';
import { spfConfig } from '../../config/spf.config';
import { lastValueFrom } from 'rxjs';
import { BuscarEmpenhosSpfInput } from '../dto/buscar-empenhos-spf.input';
import { EmpenhoSpfDto } from '../dto/empenho-spf.dto';

@Injectable()
export class BuscarEmpenhosSpfService {
  constructor(
    private httpService: HttpService,
    private authSpfService: AuthSpfService,
  ) {}

  public async buscar(
    inputData: BuscarEmpenhosSpfInput,
  ): Promise<EmpenhoSpfDto[]> {
    const uri = spfConfig.recursos.empenhosURI;
    const token = await this.authSpfService.getToken();

    const response = await lastValueFrom(
      this.httpService.get(uri, {
        baseURL: spfConfig.baseURL,
        params: { ...inputData, token },
      }),
    );

    const responseData = await response.data;
    return <EmpenhoSpfDto[]>responseData.data;
  }
}
