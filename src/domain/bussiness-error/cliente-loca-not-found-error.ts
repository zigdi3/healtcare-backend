import { BussinessError } from './bussiness-error'

export class ClienteLocaNotFoundError extends BussinessError {
  constructor () {
    super('Não foi localizado um Cliente Locavia com o ID informado.')
    this.name = 'ClienteLocaNotFoundError'
  }
}
