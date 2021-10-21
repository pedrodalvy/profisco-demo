import { UpdateEmpenhoInput } from './dto/update-empenho.input';
import { CreateEmpenhoInput } from './dto/create-empenho.input';
import { Empenho } from './entities/empenho.entity';
import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { EmpenhosService } from './services/empenhos.service';

@Module({
  imports: [
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
})
export class EmpenhosModule {}
