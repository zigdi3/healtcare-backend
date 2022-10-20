import { IController, IHttpRequest } from '@/presentation/protocols'
import { Request, Response } from 'express'

export const adaptRoute = (controller: IController) => {
  return async (req: Request, res: Response) => {
    const httpRequest: IHttpRequest = {
      body: req.body,
      pathParams: req.params,
      queryParams: formatReqQueryParams(req.query),
      headers: req.headers
    }
    const httpResponse = await controller.handle(httpRequest)
    res.status(httpResponse.statusCode).send(httpResponse.body)
  }
}

function formatReqQueryParams (reqQuery: any): object {
  const keys = Object.keys(reqQuery)
  for (const key of keys) {
    reqQuery[key] = typeof reqQuery[key] === 'string' ? (reqQuery[key].indexOf(',') > -1 ? reqQuery[key].split(',') : reqQuery[key] === 'true' ? true : reqQuery[key] === 'false' ? false : reqQuery[key]) : reqQuery[key]
  }
  return reqQuery
}
