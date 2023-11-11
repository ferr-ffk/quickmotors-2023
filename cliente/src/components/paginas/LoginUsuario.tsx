import { useEffect, useState } from "react";
import Usuario from "../../modelo/Usuario";
import Input from "../layout/Input";
import TextLabel from "../layout/TextLabel";
import style from "./Login.module.css";

function LoginUsuario() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [usuario, setUsuario] = useState<Usuario>({
    img: "",
    email: "",
    senha: "",
    apelido: "",
  });

  // busca os usuários no banco
  useEffect(() => {
    fetch("http://localhost:8080/usuario", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUsuarios(data);
        console.log(usuarios);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submit();
  };

  const handleChangeSenha = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsuario({ ...usuario, [event.target.name]: event.target.value });
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsuario({ ...usuario, [event.target.name]: event.target.value });
  };

  const submit = () => {
    const resposta = usuarios.find((u) => u.email === usuario.email);
    const usuarioExiste = resposta !== undefined;

    if (usuarioExiste) {
      const senhaIgual = resposta.senha === usuario.senha;
      if (senhaIgual) {
        // usuario aprovado! login
        console.log(usuario);
      } else {
        let paragrafo =
          document.querySelector<HTMLParagraphElement>("#mensagem_erro");

        if (paragrafo != undefined) {
          paragrafo.innerHTML = "Usuário/senha incorretos!";
        }
      }
    } else {
      let paragrafo =
        document.querySelector<HTMLParagraphElement>("#mensagem_erro");

      if (paragrafo != undefined) {
        paragrafo.innerHTML = "Usuário/senha incorretos!";
      }
    }
  };

  return (
    <div className={style.container}>
      <h1 className={style.titulo_pagina}>QuickMotors</h1>
      <form
        className={style.form}
        onSubmit={handleSubmit}
        id="conteudo-principal"
      >
        <div>
          <TextLabel htmlFor="" obrigatorio={false}>
            Endereço de e-mail:
          </TextLabel>
          <Input
            id="email"
            tipo="text"
            placeholder="Digite seu e-mail"
            classeCSS={""}
            onChange={handleChangeEmail}
          />
        </div>
        <div>
          <TextLabel htmlFor="" obrigatorio={false}>
            Senha:
          </TextLabel>
          <Input
            id="senha"
            tipo="text"
            placeholder="Digite sua senha"
            classeCSS=""
            onChange={handleChangeSenha}
          />
        </div>
        <p id="mensagem_erro" className={style.mensagem_erro}></p>
        <button className={style.botao_submit} onClick={submit}>Enviar</button>
      </form>
    </div>
  );
}

export default LoginUsuario;
