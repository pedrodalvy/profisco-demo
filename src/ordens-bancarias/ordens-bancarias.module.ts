import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { OrdemBancaria } from './entities/ordem-bancaria.entity';
import { SincronizadorObSpfService } from './services/sincronizador-ob-spf.service';
import { BuscarObsSpfService } from '../spf/services/buscar-obs-spf.service';
import { AuthSpfService } from '../spf/services/auth-spf.service';
import { HttpModule } from '@nestjs/axios';
import { EmpenhoCreatedListener } from './listeners/empenho-created.listener';

@Module({
  imports: [
    HttpModule,
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([OrdemBancaria])],
      resolvers: [
        {
          EntityClass: OrdemBancaria,
          DTOClass: OrdemBancaria,
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
