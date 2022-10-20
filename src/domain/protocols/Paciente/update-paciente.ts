import { IPacienteModel } from '@/domain/models/paciente'

export interface IUpdatePacienteById {
  update: (id: number, putResquestModel: IPacienteModel) => Promise<boolean>

}
