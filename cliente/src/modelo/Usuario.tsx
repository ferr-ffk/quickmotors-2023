import Veiculo from "./Veiculo";

export default interface Usuario {
  img: string;

  email: string;
  nomeUsuario: string;
  senha: string;

  veiculoUsado?: Veiculo;
}
