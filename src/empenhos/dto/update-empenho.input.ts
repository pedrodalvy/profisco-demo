import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateEmpenhoInput {
  @Field()
  unidadeGestora: number;
}
