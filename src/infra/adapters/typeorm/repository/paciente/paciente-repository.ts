import { IDbDeletePaciente } from "@/data/paciente/db-delete-paciente";
import { IDbFindPaciente } from "@/data/paciente/db-find-paciente";
import { IDbInsertPaciente } from "@/data/paciente/db-insert-paciente";
import { IDbUpdatePacienteById } from "@/data/paciente/db-update-paciente";
import { IPacienteModel } from "@/domain/models/paciente";
import { Brackets, getRepository, Repository } from "typeorm";
import { Paciente } from "@/infra/adapters/typeorm/entities/paciente";
import { pacienteMapToEntity, pacienteMapToModel, pacientesMapToModel } from "../../helpers/paciente-mapper";


export class PacienteRepository implements IDbInsertPaciente, IDbFindPaciente, IDbUpdatePacienteById, IDbDeletePaciente {

  private getPacienteRepo(): Repository<Paciente> {
    return getRepository(Paciente)
  }

  async find(id?: number): Promise<IPacienteModel[]> {
    const result = await this.getPacienteRepo().createQueryBuilder('paciente')
      .where(new Brackets(query => {
        query.where('1 = 1')

        id && query.andWhere('paciente.id = :id', { id: id })
      }))
      .getMany()
    return result ? pacientesMapToModel(result) : null

  }

  async update(id: number, putRequestModel: IPacienteModel): Promise<boolean> {
    const entityPaciente = pacienteMapToEntity(putRequestModel)
    delete entityPaciente.id
    return !! await this.getPacienteRepo().update({ id: id }, entityPaciente)

  }

  async insert(postRequestModel: IPacienteModel): Promise<IPacienteModel> {
    const entity = pacienteMapToEntity(postRequestModel)
    const result = await this.getPacienteRepo().save(entity)
    return result ? pacienteMapToModel(result) : null
  }

  async delete(pacienteId: number): Promise<boolean> {
    await this.getPacienteRepo().delete({ id: pacienteId })
    return true
  }
}