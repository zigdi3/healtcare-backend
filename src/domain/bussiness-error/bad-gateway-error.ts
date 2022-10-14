import { BussinessError } from './bussiness-error'

export class BadGatewayError extends BussinessError {
  constructor (customMsg: string = null) {
    const msg = customMsg || 'Erro Externo em um dos serviços ou integrações.'
    super(`${msg} (Erro Externo)`)
    this.name = 'BadGatewayError'
  }
}
