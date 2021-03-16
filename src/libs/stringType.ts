import { ValidatorType } from '../types';

type stringTypeParams = {
  message: string,
  validator: ValidatorType
}

const stringType = ({message, validator}: stringTypeParams): string => {
  switch(validator) {
    case 'yup':
      return !!message ? `.string('${message}')` : 'string()'
    default:
      return '';
  }
};

export default stringType

