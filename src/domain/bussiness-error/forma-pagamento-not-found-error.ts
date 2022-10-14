import { BussinessError } from './bussiness-error'

export class FormaPagamentoNotFoundError extends BussinessError {
  constructor () {
    super('Não foi localizado uma Forma de Pagamento com o ID informado.')
    this.name = 'FormaPagamentoNotFoundError'
  }
}
