import { PacienteRepository } from "@/infra/adapters/typeorm/repository/paciente/paciente-repository"

const makePacienteRepository = (): PacienteRepository => {
  return new PacienteRepository()

}
export const pacienteRepository = makePacienteRepository()
