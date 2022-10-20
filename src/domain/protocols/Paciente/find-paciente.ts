import { IPacienteModel } from '@/domain/models/paciente'

export interface IFindPaciente {
  find: (id?: number) => Promise<IPacienteModel[]>

}
