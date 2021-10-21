import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { spfConfig } from '../../config/spf.config';
import { lastValueFrom } from 'rxjs';

interface ISpfToken {
  token: string;
  usuario: string;
  dataExpiracao: Date;
}

@Injectable()
export class AuthSpfService {
  private spfToken: ISpfToken;

  constructor(private httpService: HttpService) {}

  public async getToken(): Promise<string> {
    if (!this.spfToken || this.spfToken.dataExpiracao < new Date()) {
      this.spfToken = await this.getTokenSpf();
    }

    return this.spfToken.token;
  }

  private async getTokenSpf(): Promise<ISpfToken> {
    const uri = spfConfig.recursos.authURI;
    const { baseURL, usuario, senha } = spfConfig;

    const response = await lastValueFrom(
      this.httpService.post(uri, { usuario, senha }, { baseURL }),
    );

    const responseData = await response.data;
    return responseData.data.pop();
  }
}
