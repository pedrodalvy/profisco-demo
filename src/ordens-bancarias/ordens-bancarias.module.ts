import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { OrdemBancaria } from './entities/ordem-bancaria.entity';

@Module({
  imports: [
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
})
export class OrdensBancariasModule {}
