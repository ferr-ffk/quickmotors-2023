import styleUsuario from "./cadastro/CadastroUsuario.module.css";
import styleMecanico from "./cadastro/CadastroMecanico.module.css";
import useCadastroVisivel from "../../hook/UseCadastroVisivel";
import FormCadastro from "./cadastro/FormCadastro";

interface Props {
  tipoLogin: "usuario" | "mecanico";
  linkLogin: string;
}

function PaginaCadastro({ linkLogin, tipoLogin }: Props) {
  const { cadastroVisivel, exibirCadastro } = useCadastroVisivel();

  const isLoginUsuario = tipoLogin === "usuario";

  return (
    <div className={styleUsuario.container}>
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
        <FormCadastro submit={() => console.log("não implementei pae")} />
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
              href={linkLogin}
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
