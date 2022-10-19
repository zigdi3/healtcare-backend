import 'module-alias/register' // permite usar o alias @
import 'reflect-metadata'
import { TypeOrmHelper } from '@/infra/adapters/typeorm/type-orm-helper'
import server from './config/app'
import env from './config/env'

TypeOrmHelper.createConnection('default')
  .then(() => {
    server.listen(env.port, () => {
      //console.log(`Ambiente ${env.databaseEnv.toUpperCase()}`)

      console.log(`Server rodando em http://${env.serverhost}:${env.port}`)
    })
  })
  .catch(console.error)
