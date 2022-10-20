import { IPacienteModel } from '@/domain/models/paciente'

export interface IDbInsertPaciente {
  insert: (postRequestModel: IPacienteModel) => Promise<IPacienteModel>
}
