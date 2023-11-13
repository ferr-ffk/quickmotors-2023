import Veiculo from "./Veiculo";

export default interface Usuario {
  id_usuario: number;
  img: string;

  email: string;
  apelido: string;
  senha: string;

  veiculoUsado?: Veiculo;
}
