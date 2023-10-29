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
  usuario: string;
  veiculo: "Carro" | "Moto" | "Outros";
  data: string;
  avaliacao?: number;
  respostas?: RespostaComentario;
}
