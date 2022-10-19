
import { UpdatePaciente } from '@/data/use-case/paciente/update-paciente'
import { IUpdatePacienteById } from '@/domain/protocols/paciente/update-paciente'
import { pacienteRepository } from '../repositories/paciente/paciente-repository-factory'

const makeUpdatePaciente = (): IUpdatePacienteById => {
  return new UpdatePaciente(pacienteRepository)
}

export const updatePaciente = makeUpdatePaciente()
