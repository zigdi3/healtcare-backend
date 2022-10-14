import { BussinessError } from './bussiness-error'

export class ConfiguracaoB2BNotFoundError extends BussinessError {
  constructor () {
    super('Não foi localizado uma ConfiguracaoB2B cadastrada ou ativa.')
    this.name = 'ConfiguracaoB2BNotFoundError'
  }
}
