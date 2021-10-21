import { EmpenhosModule } from './empenhos/empenhos.module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
