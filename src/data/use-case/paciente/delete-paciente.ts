import { IDbDeletePaciente } from '@/data/paciente/db-delete-paciente'
import { IDbFindPaciente } from '@/data/paciente/db-find-paciente'
import { GenericBussinessError } from '@/domain/bussiness-error/generic-bussiness-error'
import { IDeletePaciente } from '@/domain/protocols/paciente/delete-paciente'

export class DeletePaciente implements IDeletePaciente {
  constructor (
    private readonly pacienteRepository: IDbDeletePaciente & IDbFindPaciente
  ) { }

  async delete (pacienteId?: number): Promise<boolean> {
    const paciente = await this.pacienteRepository.find(pacienteId)
    if (!paciente) {
      throw new GenericBussinessError('Paciente nao encontrado')
    }

    return !!await this.pacienteRepository.delete(pacienteId)
  }
}
