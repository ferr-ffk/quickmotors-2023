import { Mecanico } from "./Mecanico";
import Usuario from "./Usuario";

export interface IRespostaComentario {
  usuario: Usuario | Mecanico;
  fk_Usuario_id: number;
  texto: string;

  avaliacao: number;
}

export default interface IComentario {
  id?: number;
  fk_Usuario_id: number;
  usuario: string;

  titulo: string;
  texto: string;

  veiculo: string;

  data: string;

  avaliacao?: number;

  respostas?: IRespostaComentario | IRespostaComentario[];

  localização?: string;
}
