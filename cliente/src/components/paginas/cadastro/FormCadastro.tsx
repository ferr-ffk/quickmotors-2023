import Input from "../../layout/Input";
import TextLabel from "../../layout/TextLabel";
import style from "./FormCadastro.module.css";

interface Props {
  submit: () => void;
}

function FormCadastro({ submit }: Props) {
  const handleSubmit = (event: any) => {
    event?.preventDefault();
  };

  return (
    <form className={style.form} onSubmit={submit}>
      <div>
        <TextLabel htmlFor="email" obrigatorio={true}>
          Endereço de e-mail
        </TextLabel>
        <Input
          id="email"
          classeCSS="email"
          tipo="email"
          placeholder="Digite seu e-mail"
        />
      </div>

      <div>
        <TextLabel htmlFor="senha" obrigatorio={true}>
          Entre com uma senha:
        </TextLabel>
        <Input tipo="password" placeholder="" id="senha" />
      </div>

      <div>
        <TextLabel htmlFor="senha_confirmar" obrigatorio={true}>
          Confirme a senha:
        </TextLabel>
        <Input tipo="password" placeholder="" id="senha_confirmar" />
      </div>

      <div>
        <TextLabel obrigatorio={false} htmlFor="apelido">
          Opcional: Escolha um apelido!
        </TextLabel>
        <Input
          id="apelido"
          classeCSS="apelido"
          tipo="text"
          placeholder="@usuario"
        />
      </div>

      <button className={style.botao_enviar} onClick={handleSubmit}>
        Enviar
      </button>
    </form>
  );
}

export default FormCadastro;
