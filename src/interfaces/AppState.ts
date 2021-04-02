import { Validator } from '.';
import { SchemaValidators } from '../types';

export interface AppState {
  schemaValues: Validator[] | [],
  schemaValue: Validator | {},
  validatorMethods: SchemaValidators[],
  validatorMethod: SchemaValidators | null,
  open: boolean
}