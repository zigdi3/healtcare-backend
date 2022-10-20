
import { InsertPaciente } from '@/data/use-case/paciente/insert-paciente'
import { ICreatePaciente } from '@/domain/protocols/paciente/insert-paciente_old'
import { pacienteRepository } from '../repositories/paciente/paciente-repository-factory'

const makeInsertPaciente = (): ICreatePaciente => {
  return new InsertPaciente(pacienteRepository)
}

export const insertPaciente = makeInsertPaciente()
