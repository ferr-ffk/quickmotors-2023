import { Mecanico } from "./Mecanico";
import Usuario from "./Usuario";

export interface IRespostaComentario {
  usuario: Usuario | Mecanico;
  fk_Usuario_id: number;
  texto: string;

  avaliacao: number;
}

export default interface IComentario {
  id: number;
  fk_Usuario_id: number;

  titulo: string;
  texto: string;

  veiculo: "Carro" | "Moto" | "Outros";

  data: string;

  avaliacao?: number;

  respostas?: IRespostaComentario | IRespostaComentario[];

  localização?: string;
}
