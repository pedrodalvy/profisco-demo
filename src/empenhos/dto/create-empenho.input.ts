import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateEmpenhoInput {
  @Field()
  unidadeGestora: number;
}
