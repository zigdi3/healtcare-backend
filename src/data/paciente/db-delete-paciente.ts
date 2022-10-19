import { IPacienteModel } from "@/domain/models/paciente"

export interface IDbDeletePaciente {
  delete: (pacienteId: number) => Promise<boolean>
}