import { IPacienteModel } from '@/domain/models/paciente_old'

export interface IDbFindPaciente {
  find: (id?: number) => Promise<IPacienteModel[]>
}

// export interface IDbFindPacienteByDescricao {
//   findByDescricao: (descricao: string) => Promise<IPacienteModel[]>
// }
