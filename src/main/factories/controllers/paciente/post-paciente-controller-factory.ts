import { Paciente } from "@/infra/adapters/typeorm/entities/Paciente";
import { adaptRoute } from "@/main/adapters/express/express-route-adapter";
import { PostPacienteController } from "@/presentation/controllers/paciente/post-paciente-controller";
import { IController } from "@/presentation/protocols";
import { insertPaciente } from "../../use-cases/post-paciente-factory";

const makePostPacienteController = (): IController => {
  return new PostPacienteController(insertPaciente)

}

export const postPacienteController = adaptRoute(makePostPacienteController())