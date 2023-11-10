import styleUsuario from "./cadastro/CadastroUsuario.module.css";
import styleMecanico from "./cadastro/CadastroMecanico.module.css";
import useCadastroVisivel from "../../hook/UseCadastroVisivel";
import FormCadastro from "./cadastro/FormCadastro";
import { useNavigate } from "react-router-dom";

interface Props {
  tipoLogin: "usuario" | "mecanico";
  linkLogin: string;
  submit: (u: any) => void;

  onChangeEmail: (u: any) => void;
  onChangeSenha: (u: any) => void;
  onChangeConfirmar: (u: any) => void;
  onChangeApelido: (u: any) => void;
  onChangeIdMecanico?: (u: any) => void;
}

function PaginaCadastro({
  linkLogin,
  tipoLogin,
  submit,
  onChangeEmail,
  onChangeSenha,
  onChangeConfirmar,
  onChangeApelido,
  onChangeIdMecanico,
}: Props) {
  const { cadastroVisivel, exibirCadastro } = useCadastroVisivel();
  const navigate = useNavigate();

  const isLoginUsuario = tipoLogin === "usuario";

  // como o href do elemento 'a' redireciona para um caminho relativo ao link,
  // tem que usar o useNavigate para redirecionar para um caminho dado no componente
  const navigateLink = () => {
    navigate(linkLogin);
  }

  return (
    <div id="conteudo-principal" className={styleUsuario.container}>
      <h1
        // verifica qual é o estilo a ser aplicado e então aplica conforme os arquivos css
        className={
          isLoginUsuario
            ? styleUsuario.titulo_pagina
            : styleMecanico.titulo_pagina
        }
      >
        QuickMotors
      </h1>

      {cadastroVisivel ? (
        <FormCadastro
          handleChangeIdMecanico={onChangeIdMecanico}
          submit={submit}
          tipo={tipoLogin}
          handleChangeEmail={onChangeEmail}
          handleChangeSenha={onChangeSenha}
          handleChangeConfirmar={onChangeConfirmar}
          handleChangeApelido={onChangeApelido}
        />
      ) : (
        <>
          <a
            href="#"
            onClick={exibirCadastro}
            className={styleUsuario.link_cadastrar}
          >
            Cadastrar com Email
          </a>
          <p className={styleUsuario.paragrafo_login}>
            Já é usuário?{" "}
            <a
              className={
                isLoginUsuario
                  ? styleUsuario.link_login
                  : styleMecanico.link_login
              }
              href="#"
              onClick={navigateLink}
            >
              Entre
            </a>
          </p>
        </>
      )}
    </div>
  );
}

export default PaginaCadastro;
