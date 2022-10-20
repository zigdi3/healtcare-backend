
export interface IDeletePaciente {
  delete: (pacienteId: number) => Promise<boolean>

}
