import { Validator } from '../interfaces';
import schemaBuilder from './schemaBuilder';
import { ValidatorType } from '../types';

const schemaContainer = (validatorConfig: Validator[], validatorType: ValidatorType) => {
  switch (validatorType) {
    case 'yup':
      return `
      const schema = yup.object().shape({
        ${schemaBuilder(validatorConfig, validatorType)}
      });
    `
    default:
      return '';
  }
};

export default schemaContainer;