import { UpdateEmpenhoInput } from './dto/update-empenho.input';
import { CreateEmpenhoInput } from './dto/create-empenho.input';
import { Empenho } from './entities/empenho.entity';
import { Module } from '@nestjs/common';
import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { EmpenhosService } from './services/empenhos.service';
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
          pagingStrategy: PagingStrategies.OFFSET,
          enableTotalCount: true,
          enableAggregate: true,
          create: { many: { disabled: true }, one: { name: 'createEmpenho' } },
          update: { many: { disabled: true }, one: { name: 'updateEmpenho' } },
          delete: { many: { disabled: true }, one: { name: 'deleteEmpenho' } },
        },
      ],
    }),
  ],
})
export class EmpenhosModule {}
