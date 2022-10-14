import { BussinessError } from './bussiness-error'

export class InvalidCPFError extends BussinessError {
  constructor () {
    super('CPF informado é inválido')
    this.name = 'InvalidCPFError'
  }
}
