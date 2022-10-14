import { BussinessError } from './bussiness-error'

export class MunicipioNotFoundError extends BussinessError {
  constructor () {
    super('Não foi localizado um Municipio com o ID informado.')
    this.name = 'MunicipioNotFoundError'
  }
}
