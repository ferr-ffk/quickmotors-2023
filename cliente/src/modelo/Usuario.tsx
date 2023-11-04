import Veiculo from "./Veiculo";

export default interface Usuario {
  img: string;

  email: string;
  apelido: string;
  senha: string;

  veiculoUsado?: Veiculo;
}
