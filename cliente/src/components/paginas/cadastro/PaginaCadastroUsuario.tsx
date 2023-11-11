import { useNavigate } from "react-router-dom";
import Usuario from "../../../modelo/Usuario";
import PaginaCadastro from "../PaginaCadastro";
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
    console.log(usuario);

    const senha = document.querySelector<HTMLInputElement>("#senha")?.value;
    const confirmar =
      document.querySelector<HTMLInputElement>("#senha_confirmar")?.value;

    let senhaConfirmada: boolean = senha === confirmar;

    if (!senhaConfirmada) {
      return;
    }

    fetch("http://localhost:8080/usuario", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(usuario),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  function handleChangeEmail(event: React.ChangeEvent<HTMLInputElement>): void {
    // se o usuário não especificar um apelido, será definido como o email
    setUsuario({ ...usuario, [event.target.name]: event.target.value });
    setUsuario({ ...usuario, [event.target.name]: event.target.value });
    console.log(usuario);
  }

  function handleChangeSenha(event: React.ChangeEvent<HTMLInputElement>): void {
    setUsuario({ ...usuario, [event.target.name]: event.target.value });
    console.log(usuario);
  }

  function handleChangeConfirmar(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    const senha = document.querySelector<HTMLInputElement>("#senha")?.value;
    const confirmar =
      document.querySelector<HTMLInputElement>("#senha_confirmar")?.value;

    let senhaConfirmada: boolean = senha === confirmar;

    if (senhaConfirmada) {
      setUsuario({ ...usuario, senha: event.target.value });
    } else {
      let paragrafo =
        document.querySelector<HTMLParagraphElement>("#senha_status");

      if (paragrafo != undefined) {
        paragrafo.innerHTML = "As senhas devem ser iguais!";
      }
    }
  }

  function handleChangeApelido(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    setUsuario({ ...usuario, [event.target.name]: event.target.value });
    console.log(usuario);
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
