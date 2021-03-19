import { ValidatorType, SchemaValidators } from '.';

export type ValidationTypeParams = {
  message: string,
  validator: ValidatorType,
  value?: number,
  type: SchemaValidators
}