import { DeletePaciente } from '@/data/use-case/paciente/delete-paciente'
import { IDeletePaciente } from '@/domain/protocols/paciente/delete-paciente'
import { pacienteRepository } from '../repositories/paciente/paciente-repository-factory'

const makeDeletePaciente = (): IDeletePaciente => {
  return new DeletePaciente(pacienteRepository)
}

export const deletePaciente = makeDeletePaciente()
