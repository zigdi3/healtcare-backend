import { BussinessError } from './bussiness-error'

export class UserAlreadyRegisteredError extends BussinessError {
  constructor () {
    super('Usuario já cadastrado')
    this.name = 'UserAlreadyRegisteredError'
  }
}
