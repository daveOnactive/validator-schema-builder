import { Validator } from '../interfaces';

export const validator: Validator[] = [
  {
    name: 'firstName',
    validator: [
      {
        type: 'string',
        message: 'First name must be a string'
      },
      {
        type: 'required',
        message: ''
      }
    ]
  },
  {
    name: 'lastName',
    validator: [
      {
        type: 'string',
        message: 'Last name must be a string'
      }
    ]
  },
  {
    name: 'middleName',
    validator: [
      {
        type: 'string',
        message: 'Middle name must be a string'
      }
    ]
  }
];