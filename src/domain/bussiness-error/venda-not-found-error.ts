import { BussinessError } from './bussiness-error'

export class VendaNotFoundError extends BussinessError {
  constructor () {
    super('Não foi encontrada uma Venda B2B com o ID informado.')
    this.name = 'VendaNotFoundError'
  }
}
