module.exports = [
  {

    name: 'default',
    host: 'localhost',
    username: 'adminodapp',
    password: 'odappServer',
    database: 'qas',
    port: 3306,
    type: 'mysql',
    options: {
      enableArithAbort: true,
      trustServerCertificate: true,
      isolationLevel: 0x01, // READ_UNCOMMITTED
      connectionIsolationLevel: 0x01 // READ_UNCOMMITTED
    },

    connectionTimeout: 80000,
    requestTimeout: 80000,
    logging: false,
    migrationsTableName: 'MigrationsOdapp',
    entities: [`${process.env.TS_NODE_DEV === undefined ? 'dist' : 'src'}/infra/adapters/typeorm/entities/*.{js,ts}`],
    migrations: [`${process.env.TS_NODE_DEV === undefined ? 'dist' : 'src'}/infra/adapters/typeorm/migrations/*.{js,ts}`],
    cli: {
      entitiesDir: 'src/infra/adapters/typeorm/entities',
      migrationsDir: 'src/infra/adapters/typeorm/migrations'
    }
  }
]
