import { adaptRoute } from '@/main/adapters/express/express-route-adapter'
import { GetPacienteController } from '@/presentation/controllers/paciente/get-paciente-controller'
import { IController } from '@/presentation/protocols'
import { findPaciente } from '../../use-cases/get-paciente-factory'

const makeGetPacienteController = (): IController => {
  return new GetPacienteController(findPaciente)
}

export const getPacienteController = adaptRoute(makeGetPacienteController())
