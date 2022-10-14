import { IPacienteModel } from "@/domain/models/Paciente"

export interface IDbInsertPaciente {
  insert: (postRequestModel: IPacienteModel) => Promise<IPacienteModel>
}