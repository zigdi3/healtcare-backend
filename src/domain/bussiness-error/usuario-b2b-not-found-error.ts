import { BussinessError } from './bussiness-error'

export class UsuarioB2BNotFoundError extends BussinessError {
  constructor () {
    super('Não foi localizado um UsuarioB2B com o ID informado.')
    this.name = 'UsuarioB2BNotFoundError'
  }
}
