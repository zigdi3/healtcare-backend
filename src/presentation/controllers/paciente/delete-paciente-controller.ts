import { IDeletePaciente } from "@/domain/protocols/paciente/delete-paciente"
import ErrorHandler from "@/presentation/http/error-handler"
import { badRequest, ok } from "@/presentation/http/http-status"
import { IController, IHttpRequest, IHttpResponse } from "@/presentation/protocols"

export class DeletePacienteController implements IController {
  constructor(
    private readonly deletePaciente: IDeletePaciente
  ) { }

  @ErrorHandler()
  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {

    const id = httpRequest.queryParams?.pacienteId
    const result = await this.deletePaciente.delete(id)
    return result ? ok(result) : badRequest(new Error('Erro ao atualizar dados paciente'))
  }

}