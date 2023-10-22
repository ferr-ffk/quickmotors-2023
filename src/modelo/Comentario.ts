import Usuario from "./Usuario";
import Veiculo from "./Veiculo/Veiculo";

interface RespostaComentario {
  usuario: Usuario;
  texto: string;
  avaliacao: number;
}

export default interface Comentario {
  titulo: string;
  texto: string;
  descricao?: string;
  veiculo: Veiculo;
  /* TODO: eu acho que tem que mudar esse ngc de avaliacao pra um objeto proprio */
  avaliacao: number;
  respostas: RespostaComentario;
}
