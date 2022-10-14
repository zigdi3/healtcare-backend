import { BussinessError } from './bussiness-error'

export class ClienteB2BNotFoundError extends BussinessError {
  constructor () {
    super('Não foi localizado um ClienteB2B com o ID informado.')
    this.name = 'ClienteB2BNotFoundError'
  }
}
