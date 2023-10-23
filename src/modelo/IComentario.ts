import Usuario from "./Usuario";

interface RespostaComentario {
  usuario: Usuario;
  texto: string;
  // ? funcionaria que nem upvote no reddit?
  avaliacao: number;
}

export default interface IComentario {
  titulo: string;
  texto: string;
  descricao?: string;
  usuario: string;
  veiculo: "Carro" | "Moto" | "Outros";
  data: string;
  // TODO: eu acho que tem que mudar esse ngc de avaliacao pra um objeto proprio
  avaliacao?: number;
  respostas?: RespostaComentario;
}
