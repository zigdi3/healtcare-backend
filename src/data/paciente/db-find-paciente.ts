import { IPacienteModel } from "@/domain/models/paciente";

export interface IDbFindPaciente {
  find: (id?: number) => Promise<IPacienteModel[]>
}

// export interface IDbFindPacienteByDescricao {
//   findByDescricao: (descricao: string) => Promise<IPacienteModel[]>
// }
