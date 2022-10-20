import { IDbFindPaciente } from '@/data/paciente/db-find-paciente'
import { IDbUpdatePacienteById } from '@/data/paciente/db-update-paciente'
import { GenericBussinessError } from '@/domain/bussiness-error/generic-bussiness-error'
import { IPacienteModel } from '@/domain/models/paciente_old'
import { IUpdatePacienteById } from '@/domain/protocols/paciente/update-paciente'

export class UpdatePaciente implements IUpdatePacienteById {
  constructor(
    private readonly pacienteRepository: IDbUpdatePacienteById & IDbFindPaciente
  ) { }

  async update(id: number, putRequestModel: IPacienteModel): Promise<boolean> {
    const paciente = await this.pacienteRepository.find(id)
    if (!paciente) {
      throw new GenericBussinessError('Paciente nao encontrado')
    }

    paciente[0].cidade = putRequestModel?.cidade ?? paciente[0].cidade
    paciente[0].estado = putRequestModel?.estado ?? paciente[0].estado
    paciente[0].nome = putRequestModel?.nome ?? paciente[0].nome
    paciente[0].idade = putRequestModel?.idade ?? paciente[0].idade

    const result = await this.pacienteRepository.update(id, paciente[0])

    return !!result
  }
}
