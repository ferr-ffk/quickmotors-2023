import { useState } from "react";
import Usuario from "../../modelo/Usuario";
import Input from "../layout/Input";
import TextLabel from "../layout/TextLabel";
import style from "./Login.module.css";

function LoginUsuario() {
  const [usuario, setUsuario] = useState<Usuario>({
    email: "",
    apelido: "",
    senha: "",
    img: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submit(event);
  };

  const handleChangeSenha = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsuario({ ...usuario, [event.target.name]: event.target.value });
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsuario({ ...usuario, [event.target.name]: event.target.value });
  };

  const submit = (event: any) => {
    // TODO aplicar logica de login
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
        <button onClick={submit}>Enviar</button>
      </form>
    </div>
  );
}

export default LoginUsuario;
