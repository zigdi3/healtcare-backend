import { bodyParser, bodyParserUrlEnconded, contentType, cors, helmetHeaders } from '@/main/middlewares/'
import { Express } from 'express'

export default (app: Express): void => {
  app.use(helmetHeaders)
  app.use(bodyParserUrlEnconded)
  app.use(bodyParser)
  app.use(cors)
  app.use(contentType)
}