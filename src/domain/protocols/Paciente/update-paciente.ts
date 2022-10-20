import { IPacienteModel } from '@/domain/models/paciente_old'

export interface IUpdatePacienteById {
  update: (id: number, putResquestModel: IPacienteModel) => Promise<boolean>

}
