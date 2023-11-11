import { Mecanico } from "../../modelo/Mecanico";

import Input from "../form/Input";
import TextLabel from "../form/TextLabel";

import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import style from "./Login.module.css";

function LoginMecanico() {
  const [mecanicos, setMecanicos] = useState<Mecanico[]>([]);
  const [mecanico, setMecanico] = useState<Mecanico>({
    email: "",
    senha: "",
    id_mecanico: "",
    apelido: "",
    img: "",
  });

  const [, setCookie] = useCookies(["usuario"]);
  const navigate = useNavigate();

  // busca os usuários no banco
  useEffect(() => {
    fetch("http://localhost:8080/mecanico", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setMecanicos(data);
        console.log(mecanicos);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submit();
  };

  const handleChangeSenha = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMecanico({ ...mecanico, [event.target.name]: event.target.value });
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMecanico({ ...mecanico, [event.target.name]: event.target.value });
  };

  function salvarLogin() {
    setCookie("usuario", mecanico.email);
  }

  const submit = () => {
    const resposta = mecanicos.find((u) => u.email === mecanico.email);
    const usuarioExiste = resposta !== undefined;

    if (usuarioExiste) {
      const senhaIgual = resposta.senha === mecanico.senha;
      if (senhaIgual) {
        console.log(mecanico);
        salvarLogin();
        navigate("/");
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
      <h1 className={style.titulo_pagina_mecanico}>QuickMotors</h1>
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
        <button className={style.botao_submit_mecanico} onClick={submit}>
          Enviar
        </button>
      </form>
      <p className={style.paragrafo_outro}>
        Entrar como{" "}
        <a
          href="#"
          onClick={() => {
            navigate("/login/usuario");
          }}
        >
          usuário
        </a>
      </p>
    </div>
  );
}

export default LoginMecanico;
