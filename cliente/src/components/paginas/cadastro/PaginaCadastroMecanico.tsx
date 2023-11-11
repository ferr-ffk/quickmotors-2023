import { useNavigate } from "react-router-dom";
import PaginaCadastro from "../PaginaCadastro";
import { useState } from "react";
import { Mecanico } from "../../../modelo/Mecanico";

function CadastroMecanico() {
  const navigate = useNavigate();

  const [mecanico, setMecanico] = useState<Mecanico>({
    email: "",
    img: "",
    senha: "",
    id_mecanico: "",
  });

  // função para criar requisição POST de um usuário no sistema
  const handleSubmit = () => {
    const senha = document.querySelector<HTMLInputElement>("#senha")?.value;
    const confirmar =
      document.querySelector<HTMLInputElement>("#senha_confirmar")?.value;

    let senhaConfirmada: boolean = senha === confirmar;

    if (!senhaConfirmada) {
      return;
    }

    fetch("http://localhost:8080/mecanico", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(mecanico),
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
    setMecanico({ ...mecanico, [event.target.name]: event.target.value });
    setMecanico({ ...mecanico, [event.target.name]: event.target.value });
  }

  function handleChangeSenha(event: React.ChangeEvent<HTMLInputElement>): void {
    setMecanico({ ...mecanico, [event.target.name]: event.target.value });
  }

  function handleChangeConfirmar(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    const senha = document.querySelector<HTMLInputElement>("#senha")?.value;
    const confirmar =
      document.querySelector<HTMLInputElement>("#senha_confirmar")?.value;

    let senhaConfirmada: boolean = senha === confirmar;

    if (senhaConfirmada) {
      setMecanico({ ...mecanico, senha: event.target.value });
    } else {
      let paragrafo =
        document.querySelector<HTMLParagraphElement>(".senha_status");

      if (paragrafo != undefined) {
        paragrafo.innerHTML = "As senhas devem ser iguais!";
      }
    }
  }

  function handleChangeIdMecanico() {
    const numeroCPF = document.querySelector<HTMLInputElement>("#id_mecanico")?.value;
    setMecanico({ ...mecanico, id_mecanico: numeroCPF });
    console.log(numeroCPF);
  }

  function handleChangeApelido(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    setMecanico({ ...mecanico, [event.target.name]: event.target.value });
  }

  return (
    <PaginaCadastro
      tipoLogin="mecanico"
      linkLogin="/login/mecanico"
      onChangeEmail={handleChangeEmail}
      onChangeSenha={handleChangeSenha}
      onChangeConfirmar={handleChangeConfirmar}
      onChangeIdMecanico={handleChangeIdMecanico}
      onChangeApelido={handleChangeApelido}
      submit={handleSubmit}
    />
  );
}

export default CadastroMecanico;
