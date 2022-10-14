import { BussinessError } from './bussiness-error'

export class MarcaVeiculoNotFoundError extends BussinessError {
  constructor () {
    super('Não foi localizado uma Marca de Veiculo com o ID informado.')
    this.name = 'MarcaVeiculoNotFoundError'
  }
}
