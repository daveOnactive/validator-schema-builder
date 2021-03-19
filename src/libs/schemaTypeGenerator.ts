import { ValidationTypeParams } from '../types';

const schemaTypeGenerator = ({ message, validator, value, type }: ValidationTypeParams): string => {
  switch (validator) {
    case 'yup':
      return !!message ? `.${type}(${value || ''}${value ? ',' : ''}'${message}')` : `.${type}(${value || ''})`
    default:
      return '';
  }
};

export default schemaTypeGenerator

