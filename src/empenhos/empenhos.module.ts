import { UpdateEmpenhoInput } from './dto/update-empenho.input';
import { CreateEmpenhoInput } from './dto/create-empenho.input';
import { Empenho } from './entities/empenho.entity';
import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Empenho])],
      resolvers: [
        {
          EntityClass: Empenho,
          DTOClass: Empenho,
          CreateDTOClass: CreateEmpenhoInput,
          UpdateDTOClass: UpdateEmpenhoInput,
          create: { many: { disabled: true } },
          update: { many: { disabled: true } },
          delete: { many: { disabled: true } },
        },
      ],
    }),
  ],
})
export class EmpenhosModule {}
