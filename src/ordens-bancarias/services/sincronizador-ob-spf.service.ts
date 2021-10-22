import { Injectable } from '@nestjs/common';
import { BuscarObSpfInput } from '../../spf/dto/buscar-ob-spf.input';
import { BuscarObsSpfService } from '../../spf/services/buscar-obs-spf.service';

@Injectable()
export class SincronizadorObSpfService {
  constructor(private buscarObsService: BuscarObsSpfService) {}

  async sincronizarObs(data: BuscarObSpfInput): Promise<void> {
    const ordensBancarias = await this.buscarObsService.buscar(data);

    ordensBancarias.map((ordemBancaria) => {
      console.log(ordemBancaria);
    });
  }
}
