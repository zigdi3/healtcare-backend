import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class Paciente_1665694586590 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Paciente',
      columns: [
        {
          name: 'Id',
          type: 'INTEGER',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'

        },
        {
          name: 'Nome',
          type: 'VARCHAR(150)'

        },
        {
          name: 'Idade',
          type: 'INTEGER'
        },
        {
          name: 'DataCadastro',
          type: 'DATE'
        },
        {
          name: 'Cidade',
          type: 'VARCHAR(80)'
        },
        {
          name: 'Estado',
          type: 'VARCHAR(80)'
        },
        {
          name: 'InseridoEm',
          type: 'TIMESTAMP',
          default: 'NOW()'
        }
      ]
    })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Paciente')
  }
}
