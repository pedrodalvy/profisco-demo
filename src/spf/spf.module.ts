import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { EmpenhosSpfResolver } from './resolvers/empenhos-spf.resolver';
import { AuthSpfService } from './services/auth-spf.service';
import { BuscarEmpenhosSpfService } from './services/buscar-empenhos-spf.service';
import { OrdensBancariasSpfResolver } from './resolvers/ordens-bancarias-spf.resolver';
import { BuscarObsSpfService } from './services/buscar-obs-spf.service';

@Module({
  imports: [HttpModule],
  providers: [
    EmpenhosSpfResolver,
    OrdensBancariasSpfResolver,
    AuthSpfService,
    BuscarEmpenhosSpfService,
    BuscarObsSpfService,
  ],
  exports: [AuthSpfService, BuscarEmpenhosSpfService, BuscarObsSpfService],
})
export class SpfModule {}
