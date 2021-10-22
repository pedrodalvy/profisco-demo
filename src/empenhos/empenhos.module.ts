import { UpdateEmpenhoInput } from './dto/update-empenho.input';
import { CreateEmpenhoInput } from './dto/create-empenho.input';
import { Empenho } from './entities/empenho.entity';
import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { EmpenhosService } from './services/empenhos.service';
import { EmpenhoCreatedListener } from './listeners/empenho-created.listener';
import { SincronizadorObSpfService } from '../ordens-bancarias/services/sincronizador-ob-spf.service';
import { BuscarObsSpfService } from '../spf/services/buscar-obs-spf.service';
import { AuthSpfService } from '../spf/services/auth-spf.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule,
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Empenho])],
      services: [EmpenhosService],
      resolvers: [
        {
          EntityClass: Empenho,
          DTOClass: Empenho,
          CreateDTOClass: CreateEmpenhoInput,
          UpdateDTOClass: UpdateEmpenhoInput,
          ServiceClass: EmpenhosService,
          create: { many: { disabled: true }, one: { name: 'createEmpenho' } },
          update: { many: { disabled: true }, one: { name: 'updateEmpenho' } },
          delete: { many: { disabled: true }, one: { name: 'deleteEmpenho' } },
        },
      ],
    }),
  ],
  providers: [
    EmpenhoCreatedListener,
    SincronizadorObSpfService,
    BuscarObsSpfService,
    AuthSpfService,
  ],
})
export class EmpenhosModule {}
