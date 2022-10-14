import { BussinessError } from './bussiness-error'

export class CategoriaVeiculoNotFoundError extends BussinessError {
  constructor () {
    super('Não foi localizado uma Categoria de Veiculo com o ID informado.')
    this.name = 'CategoriaVeiculoNotFoundError'
  }
}
