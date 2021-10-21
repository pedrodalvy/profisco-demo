import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { EmpenhosSpfResolver } from './resolvers/empenhos-spf.resolver';
import { AuthSpfService } from './services/auth-spf.service';
import { BuscarEmpenhosSpfService } from './services/buscar-empenhos-spf.service';

@Module({
  imports: [HttpModule],
  providers: [EmpenhosSpfResolver, AuthSpfService, BuscarEmpenhosSpfService],
})
export class SpfModule {}
