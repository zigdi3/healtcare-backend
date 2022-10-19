import { IUpdatePacienteById } from "@/domain/protocols/paciente/update-paciente"
import ErrorHandler from "@/presentation/http/error-handler"
import { badRequest, ok } from "@/presentation/http/http-status"
import { IController, IHttpRequest, IHttpResponse } from "@/presentation/protocols"

export class PutPacienteController implements IController {
  constructor(
    private readonly updatePaciente: IUpdatePacienteById
  ) { }
  @ErrorHandler()
  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {

    const id = httpRequest.pathParams?.id
    const data = httpRequest.body
    const result = await this.updatePaciente.update(id, { ...data })
    return result ? ok(result) : badRequest(new Error('Erro ao atualizar dados paciente'))
  }

}