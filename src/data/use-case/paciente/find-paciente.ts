import { IDbFindPaciente } from "@/data/paciente/db-find-paciente"
import { IPacienteModel } from "@/domain/models/paciente"
import { IFindPaciente } from "@/domain/protocols/paciente/find-paciente"

export class FindPaciente implements IFindPaciente {
  constructor(
    private readonly pacienteRepository: IDbFindPaciente
  ) { }

  async find(id?: number): Promise<IPacienteModel[]> {
    const paciente = await this.pacienteRepository.find(id)

    return paciente
  }
}