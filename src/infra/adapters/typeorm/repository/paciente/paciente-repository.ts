import { IDbInsertPaciente } from "@/data/paciente/db-insert-paciente";
import { IPacienteModel } from "@/domain/models/Paciente";
import { getRepository, Repository } from "typeorm";
import { Paciente } from "../../entities/Paciente";

export class PacienteRepository implements IDbInsertPaciente {

  private getPacienteRepo(): Repository<Paciente> {

    return getRepository(Paciente)
  }

  async insert(postRequestModel: IPacienteModel): Promise<IPacienteModel> {
    const result = new Paciente()
    return result
  }
}