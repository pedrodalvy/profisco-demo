import { InputType, PartialType } from '@nestjs/graphql';
import { CreateOrdensBancariasInput } from './create-ordens-bancarias.input';

@InputType()
export class UpdateOrdensBancariasInput extends PartialType(
  CreateOrdensBancariasInput,
) {}
