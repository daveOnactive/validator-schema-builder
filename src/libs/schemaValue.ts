import stringType from './stringType';
import { validatorArr } from '../interfaces';
import { ValidatorType } from '../types';
import requiredType from './requiredType';

const schemaValue = (validators: validatorArr[], validatorType: ValidatorType) => {
  const value = [];
  for(const {type, message} of validators) {
    switch(type) {
      case 'string':
        value.push(stringType({validator: validatorType, message}));
        break;
      case 'required':
        value.push(requiredType({validator: validatorType, message}));
        break;
      default:
        return '';
    }
  }
  return value.join(``);
};

export default schemaValue;