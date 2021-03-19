import { SchemaValidators } from "../types";

export interface validatorArr {
  type: SchemaValidators,
  message: string,
  value?: number
}

export interface Validator {
  name: string,
  validator: validatorArr[],
};