
export interface IDbDeletePaciente {
  delete: (pacienteId: number) => Promise<boolean>
}
