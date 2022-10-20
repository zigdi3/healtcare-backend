import { IPacienteModel } from '@/domain/models/paciente_old'
import { Paciente } from '../entities/paciente'

export const pacienteMapToModel = (entity: Paciente): IPacienteModel => {
  return {
    pacienteId: entity.id,
    nome: entity.nome,
    idade: entity.idade,
    dataCadastro: entity.dataCadastro,
    cidade: entity.cidade,
    estado: entity.estado,
    inseridoEm: entity.inseridoEm
  }
}

export const pacientesMapToModel = (arrayEntity: Paciente[]): IPacienteModel[] => {
  const arrayModel: IPacienteModel[] = []
  for (const item of arrayEntity) {
    arrayModel.push(pacienteMapToModel(item))
  }
  return arrayModel
}

export const pacienteMapToEntity = (model: IPacienteModel): Paciente => {
  const entity: Paciente = new Paciente()
  entity.id = model.pacienteId
  entity.nome = model.nome
  entity.idade = model.idade
  entity.dataCadastro = model.dataCadastro
  entity.cidade = model.cidade
  entity.estado = model.estado
  entity.inseridoEm = model.inseridoEm
  return entity
}

export const pacientesMapToEntity = (arrayModel: IPacienteModel[]): Paciente[] => {
  const arrayEntity: Paciente[] = []
  for (const item of arrayModel) {
    arrayEntity.push(pacienteMapToEntity(item))
  }
  return arrayEntity
}
