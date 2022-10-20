import { IPacienteModel } from '@/domain/models/paciente_old'

export interface IDbUpdatePacienteById {
  update: (id: number, putRequestModel: IPacienteModel) => Promise<boolean>
}
