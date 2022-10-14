import { BussinessError } from './bussiness-error'

export class UsuarioLocaNotFoundError extends BussinessError {
  constructor () {
    super('Não foi localizado um Usuario Locavia com o ID informado.')
    this.name = 'UsuarioLocaNotFoundError'
  }
}
