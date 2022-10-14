import { IDbInsertPaciente } from "@/data/paciente/db-insert-paciente";
import { IPacienteModel } from "@/domain/models/Paciente";
import { ICreatePaciente } from "@/domain/protocols/Paciente/insert-Paciente";

export class InsertPaciente implements ICreatePaciente {
  constructor(
    private readonly pacienteRepository: IDbInsertPaciente
  ) { }

  async create(postResquestMopdel: IPacienteModel): Promise<IPacienteModel> {
    const result: IPacienteModel = null

    return result
  }
}