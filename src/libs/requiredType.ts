import { ValidatorType } from '../types';

type requiredTypeParams = {
  message: string,
  validator: ValidatorType
}

const requiredType = ({message, validator}: requiredTypeParams): string => {
  switch(validator) {
    case 'yup':
      return !!message ? `.required('${message}')` : '.required()'
    default:
      return '';
  }
};

export default requiredType

