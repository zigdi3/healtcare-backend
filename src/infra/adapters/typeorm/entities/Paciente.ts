import { Entity, PrimaryGeneratedColumn } from 'typeorm'
import { DbAwareColumn } from '../mapping-for-sqlite-helper'

@Entity('Paciente')
export class Paciente {
  @PrimaryGeneratedColumn({ type: 'int', name: 'Id' })
    id: number

  @DbAwareColumn({ type: 'varchar', name: 'Nome', length: 150 })
    nome: string

  @DbAwareColumn({ type: 'int', name: 'Idade' })
    idade: number

  @DbAwareColumn({ type: 'date', name: 'DataCadastro' })
    dataCadastro: Date

  @DbAwareColumn({ type: 'varchar', name: 'Cidade', length: 80 })
    cidade: string

  @DbAwareColumn({ type: 'varchar', name: 'Estado', length: 80 })
    estado: string

  @DbAwareColumn({ type: 'date', name: 'InseridoEm', default: () => 'getdate()' })
    inseridoEm: Date
}
