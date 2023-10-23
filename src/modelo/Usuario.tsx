import Veiculo from "./Veiculo/Veiculo";

export default interface Usuario {
  img: string;

  email: string;
  nomeUsuario: string;
  senha: string;

  veiculoUsado?: Veiculo;
}
