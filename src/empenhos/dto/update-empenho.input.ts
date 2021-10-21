import { InputType, PartialType } from '@nestjs/graphql';
import { CreateEmpenhoInput } from './create-empenho.input';

@InputType()
export class UpdateEmpenhoInput extends PartialType(CreateEmpenhoInput) {}
