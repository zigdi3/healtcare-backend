import { BussinessError } from './bussiness-error'

export class InvalidEmailError extends BussinessError {
  constructor () {
    super('Email informado é inválido')
    this.name = 'InvalidEmailError'
  }
}
