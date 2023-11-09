import { Mecanico } from "./Mecanico";
import Usuario from "./Usuario";

interface RespostaComentario {
  usuario: Usuario | Mecanico;
  texto: string;
  // ? funcionaria que nem upvote no reddit?
  avaliacao: number;
}

export default interface IComentario {
  titulo: string;
  texto: string;
  usuario: Usuario;
  veiculo: "Carro" | "Moto" | "Outros";
  data: string;
  avaliacao?: number;
  respostas?: RespostaComentario;
}
