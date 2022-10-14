import { IPacienteModel } from "@/domain/models/Paciente";

export interface ICreatePaciente {
  create: (postResquestModel: IPacienteModel) => Promise<IPacienteModel>

}