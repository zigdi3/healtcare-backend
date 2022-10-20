import { IPacienteModel } from '@/domain/models/paciente_old'

export interface IDbInsertPaciente {
  insert: (postRequestModel: IPacienteModel) => Promise<IPacienteModel>
}
