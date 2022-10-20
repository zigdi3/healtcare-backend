import { adaptRoute } from '@/main/adapters/express/express-route-adapter'
import { PutPacienteController } from '@/presentation/controllers/paciente/put-paciente-controller'
import { IController } from '@/presentation/protocols'
import { updatePaciente } from '../../use-cases/put-paciente-factory'

const makePutPacienteController = (): IController => {
  return new PutPacienteController(updatePaciente)
}

export const putPacienteController = adaptRoute(makePutPacienteController())
