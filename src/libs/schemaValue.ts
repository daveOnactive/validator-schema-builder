import { validatorArr } from '../interfaces';
import { ValidatorType } from '../types';
import schemaTypeGenerator from './schemaTypeGenerator';

const schemaValue = (validators: validatorArr[], validatorType: ValidatorType) => {
  const value = [];
  for (const validator of validators) {
    value.push(schemaTypeGenerator({
      ...validator,
      validator: validatorType
    }));
  }
  return value.join(``);
};

export default schemaValue;