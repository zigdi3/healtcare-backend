import { Router } from 'express'
import { postPacienteController } from '../factories/controllers/paciente/post-paciente-controller-factory'

export default (router: Router): void => {
  router.get('/paciente/cadastrar', postPacienteController)
}
