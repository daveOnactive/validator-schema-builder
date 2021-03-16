import { Validator } from '../interfaces';
import { ValidatorType } from '../types';
import schemaValue from './schemaValue';

const schemaBuilder = (validatorConfig: Validator[], validatorType: ValidatorType) => {
  const x = [];
  for(const validator of validatorConfig) {
    x.push(`${validator.name}: yup${schemaValue(validator.validator, validatorType)},`)
  }
  return `${x.join(`
        `)}`;
};

export default schemaBuilder;