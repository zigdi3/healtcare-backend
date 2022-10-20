import { IPacienteModel } from '@/domain/models/paciente_old'

export interface ICreatePaciente {
  create: (postResquestModel: IPacienteModel) => Promise<IPacienteModel>

}
