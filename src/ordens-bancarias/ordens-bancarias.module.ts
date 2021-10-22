import { Module } from '@nestjs/common';
import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { OrdemBancaria } from './entities/ordem-bancaria.entity';
import { SincronizadorObSpfService } from './services/sincronizador-ob-spf.service';
import { BuscarObsSpfService } from '../spf/services/buscar-obs-spf.service';
import { AuthSpfService } from '../spf/services/auth-spf.service';
import { HttpModule } from '@nestjs/axios';
import { EmpenhoCreatedListener } from './listeners/empenho-created.listener';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdemBancariaRepository } from './repositories/ordem-bancaria.repository';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([OrdemBancariaRepository]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([OrdemBancaria])],
      resolvers: [
        {
          EntityClass: OrdemBancaria,
          DTOClass: OrdemBancaria,
          pagingStrategy: PagingStrategies.OFFSET,
          enableTotalCount: true,
          create: { disabled: true },
          read: { many: { name: 'ordensBancarias' } },
          update: { disabled: true },
          delete: { disabled: true },
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
export class OrdensBancariasModule {}
