export interface validatorArr {
    type: string,
    message: string
}

export interface Validator {
  name: string,
  validator: validatorArr[],
};