import { adaptRoute } from '@/main/adapters/express/express-route-adapter'
import { DeletePacienteController } from '@/presentation/controllers/paciente/delete-paciente-controller'
import { IController } from '@/presentation/protocols'
import { deletePaciente } from '../../use-cases/delete-paciente-factory'

const makeDeletePacienteController = (): IController => {
  return new DeletePacienteController(deletePaciente)
}

export const deletePacienteController = adaptRoute(makeDeletePacienteController())
