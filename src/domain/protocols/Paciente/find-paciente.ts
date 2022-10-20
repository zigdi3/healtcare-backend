import { IPacienteModel } from '@/domain/models/paciente_old'

export interface IFindPaciente {
  find: (id?: number) => Promise<IPacienteModel[]>

}
