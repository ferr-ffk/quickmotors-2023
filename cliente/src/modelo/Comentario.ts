import { Mecanico } from "./Mecanico";
import Usuario from "./Usuario";

interface RespostaComentario {
  usuario: Usuario | Mecanico;
  texto: string;

  avaliacao: number;
}

export default interface IComentario {
  id: number;
  usuario: Usuario;
  fk_Usuario_id: number;

  titulo: string;
  texto: string;

  veiculo: "Carro" | "Moto" | "Outros";

  data: string;

  avaliacao?: number;

  respostas?: RespostaComentario | RespostaComentario[];

  localização?: string;
}
