import { EmpenhosModule } from './empenhos/empenhos.module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdensBancariasModule } from './ordens-bancarias/ordens-bancarias.module';
import { SpfModule } from './spf/spf.module';
import * as ormConfig from './config/orm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
      installSubscriptionHandlers: true,
    }),
    EmpenhosModule,
    OrdensBancariasModule,
    SpfModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
