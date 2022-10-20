import { ICreatePaciente } from '@/domain/protocols/paciente/insert-paciente'
import ErrorHandler from '@/presentation/http/error-handler'
import { badRequest, ok } from '@/presentation/http/http-status'
import { IController, IHttpRequest, IHttpResponse } from '@/presentation/protocols'

export class PostPacienteController implements IController {
  constructor (
    private readonly createPaciente: ICreatePaciente
  ) { }

  @ErrorHandler()
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const data = httpRequest.body

    const result = await this.createPaciente.create(data)
    return result ? ok(result) : badRequest(new Error('Erro ao cadastrar paciente'))
  }
}
