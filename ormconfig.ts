
import { ConnectionOptions } from 'typeorm';

// Check typeORM documentation for more information.
const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'adminodapp',
  password: 'odappServer',
  database: 'QAS',
  logging: true,
  entities: [`src/infra/adapters/entities/*.${process.env.ENV === "local" ? "ts" : "js"}`],
  // We are using migrations, synchronize should be set to false.
  // synchronize: process.env.TYPEORM_SYNCHRONIZE
  //  ? process.env.TYPEORM_SYNCHRONIZE.toLowerCase() === 'true'
  //  : false,
  synchronize: true,
  migrationsRun: false,
  migrations: ['dist/**/migrations/*.js'],
  migrationsTableName: 'MigrationsOdapp',
  cli: {
    migrationsDir: 'src/infra/adapters/typeorm/migrations',
  },
}

module.exports = config;