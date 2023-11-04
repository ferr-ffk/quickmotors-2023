import { useNavigate } from "react-router-dom";
import Usuario from "../../modelo/Usuario";
import PaginaCadastro from "./PaginaCadastro";
import { useState } from "react";

function Cadastro() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState<Usuario>({
    email: "",
    img: "",
    senha: "",
    apelido: "",
  });

  // função para criar requisição POST de um usuário no sistema
  const handleSubmit = () => {
    // TODO fetch para mandar usuário
  };

  function handleChangeEmail(event: any): void {
    // se o usuário não especificar um apelido, será definido como o email
    setUsuario({ ...usuario, [event.target.name]: event.target.value });
    setUsuario({ ...usuario, apelido: event.target.value });
  }

  function handleChangeSenha(event: any): void {
    setUsuario({ ...usuario, [event.target.name]: event.target.value });
  }

  function handleChangeConfirmar(event: any): void {
    const senha = document.querySelector<HTMLInputElement>("#senha")?.value;
    const confirmar = document.querySelector<HTMLInputElement>("#senha_confirmar")?.value;

    let senhaConfirmada: boolean = senha === confirmar;

    if(senhaConfirmada) {
      setUsuario({ ...usuario, senha: event.target.value });
    } else {
      console.log("As senhas devem ser iguais!");
    }
  }

  function handleChangeApelido(event: any): void {
    setUsuario({ ...usuario, [event.target.name]: event.target.value });
  }

  return (
    <PaginaCadastro
      tipoLogin="usuario"
      linkLogin="login/usuario"

      onChangeEmail={handleChangeEmail}
      onChangeSenha={handleChangeSenha}
      onChangeConfirmar={handleChangeConfirmar}
      onChangeApelido={handleChangeApelido}

      submit={handleSubmit}
    />
  );
}

export default Cadastro;
