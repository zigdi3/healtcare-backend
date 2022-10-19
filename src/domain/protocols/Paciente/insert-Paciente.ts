import { IPacienteModel } from "@/domain/models/paciente";

export interface ICreatePaciente {
  create: (postResquestModel: IPacienteModel) => Promise<IPacienteModel>

}