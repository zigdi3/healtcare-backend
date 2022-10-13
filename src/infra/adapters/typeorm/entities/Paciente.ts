import { Entity } from "typeorm"
import { DbAwareColumn } from "../mapping-for-sqlite-helper"

@Entity('Paciente', { schema: 'dbo' })
export class Paciente {
  @DbAwareColumn({ type: 'int', primary: true, name: 'Id' })
  id: number

  @DbAwareColumn({ type: 'string', name: 'Nome', length: 150 })
  nome: string

  @DbAwareColumn({ type: 'int', name: 'Idade' })
  idade: number

  @DbAwareColumn({ type: 'date', name: 'DataCadastro' })
  dataCadastro: Date

  @DbAwareColumn({ type: 'string', name: 'Cidade', length: 80 })
  cidade: string

  @DbAwareColumn({ type: 'string', name: 'Estado', length: 80 })
  estado: string

  @DbAwareColumn({ type: 'datetime', name: 'InseridoEm' })
  inseridoEm: Date

}
