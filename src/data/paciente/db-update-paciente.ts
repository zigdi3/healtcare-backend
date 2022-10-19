import { IPacienteModel } from "@/domain/models/paciente";

export interface IDbUpdatePacienteById {
  update: (id: number, putRequestModel: IPacienteModel) => Promise<boolean>
}
