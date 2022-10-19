import { IFindPaciente } from "@/domain/protocols/paciente/find-paciente"
import ErrorHandler from "@/presentation/http/error-handler"
import { badRequest, ok } from "@/presentation/http/http-status"
import { IController, IHttpRequest, IHttpResponse } from "@/presentation/protocols"

export class GetPacienteController implements IController {
  constructor(
    private readonly findPaciente: IFindPaciente
  ) { }
  @ErrorHandler()
  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {

    const id = httpRequest.queryParams?.id ?? null

    const result = await this.findPaciente.find(id)
    return result ? ok(result) : badRequest(new Error('Erro ao buscar pacientes'))
  }

}