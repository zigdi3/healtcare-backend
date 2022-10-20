import { IDbInsertPaciente } from '@/data/paciente/db-insert-paciente'
import { IPacienteModel } from '@/domain/models/paciente'
import { ICreatePaciente } from '@/domain/protocols/paciente/insert-paciente_old'

export class InsertPaciente implements ICreatePaciente {
  constructor(
    private readonly pacienteRepository: IDbInsertPaciente
  ) { }

  async create(postResquestModel: IPacienteModel): Promise<IPacienteModel> {
    {
      const result = await this.pacienteRepository.insert({
        nome: postResquestModel.nome,
        idade: postResquestModel.idade,
        dataCadastro: new Date(),
        cidade: postResquestModel.cidade,
        estado: postResquestModel.estado,
        inseridoEm: new Date()
      })
      return result
    }
  }
}
