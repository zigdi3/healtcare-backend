import { Router } from 'express'
import { deletePacienteController } from '../factories/controllers/paciente/delete-paciente-controller-factory'
import { getPacienteController } from '../factories/controllers/paciente/find-paciente-controller-factory'
import { postPacienteController } from '../factories/controllers/paciente/post-paciente-controller-factory'
import { putPacienteController } from '../factories/controllers/paciente/put-paciente-controller-factory'

export default (router: Router): void => {
  router.get('/paciente/encontrar', getPacienteController)
  router.post('/paciente/cadastrar', postPacienteController)
  router.put('/paciente/atualizar/:id', putPacienteController)
  router.delete('/paciente/excluir', deletePacienteController)


}
