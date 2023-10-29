import Input from "../../layout/Input";
import RadioLabel from "../../layout/RadioLabel";
import TextLabel from "../../layout/TextLabel";
import style from "./FormCadastro.module.css";

interface Props {
  submit: () => void;
  tipo: "mecanico" | "usuario";
}

function FormCadastro({ submit, tipo }: Props) {
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

      {tipo === "mecanico" && (
        <div>
          {/* // TODO Validar o CPF ou o MEI */}
          <RadioLabel
            campos={["CPF", "MEI"]}
            onChange={function (): void {
              throw new Error("Não implementei ne pae.");
            }}
          />
          <Input
            classeCSS="id_mecanico"
            id="id_mecanico"
            tipo="text"
            placeholder="Digite seu CPF"
          />
        </div>
      )}

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

      <button
        className={
          tipo === "usuario" ? style.enviar_usuario : style.enviar_mecanico
        }
        onClick={handleSubmit}
      >
        Enviar
      </button>
    </form>
  );
}

export default FormCadastro;
