import { BussinessError } from './bussiness-error'

export class InvalidCNPJError extends BussinessError {
  constructor () {
    super('CNPJ informado é inválido')
    this.name = 'InvalidCNPJError'
  }
}
