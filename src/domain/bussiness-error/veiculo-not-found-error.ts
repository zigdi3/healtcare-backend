import { BussinessError } from './bussiness-error'

export class VeiculoNotFoundError extends BussinessError {
  constructor () {
    super('Não foi localizado um Veiculo com o ID informado.')
    this.name = 'VeiculoNotFoundError'
  }
}
