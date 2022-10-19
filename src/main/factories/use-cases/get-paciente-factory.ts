import { FindPaciente } from "@/data/use-case/paciente/find-paciente"
import { IFindPaciente } from "@/domain/protocols/paciente/find-paciente"
import { pacienteRepository } from "../repositories/paciente/paciente-repository-factory"

const makeFindPaciente = (): IFindPaciente => {
  return new FindPaciente(pacienteRepository)
}

export const findPaciente = makeFindPaciente()
