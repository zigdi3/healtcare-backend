import { BussinessError } from './bussiness-error'

export class UnidadeNotFoundError extends BussinessError {
  constructor () {
    super('Não foi localizado uma Unidade com o ID informado.')
    this.name = 'UnidadeNotFoundError'
  }
}
