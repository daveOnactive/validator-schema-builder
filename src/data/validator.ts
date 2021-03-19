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
  },
  {
    name: 'email',
    validator: [
      {
        type: 'string',
        message: 'Email must be a string'
      },
      {
        type: 'email',
        message: 'Email must be a valid email'
      },
      {
        type: 'required',
        message: 'Email is required'
      }
    ]
  },
  {
    name: 'age',
    validator: [
      {
        type: 'number',
        message: ''
      },
      {
        type: 'max',
        message: `Can not be greater than 4`,
        value: 4
      },
      {
        type: 'min',
        message: '',
        value: 1
      }
    ]
  },
];