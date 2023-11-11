import Input from "../../form/Input";
import RadioLabel from "../../form/RadioLabel";
import TextLabel from "../../form/TextLabel";
import style from "./FormCadastro.module.css";

interface Props {
  submit: (u: any) => void;
  tipo: "mecanico" | "usuario";

  handleChangeIdMecanico?: (u: any) => void;
  handleChangeRadio?: (u: any) => void;

  handleChangeEmail: (u: any) => void;
  handleChangeSenha: (u: any) => void;
  handleChangeConfirmar: (u: any) => void;

  handleChangeApelido: (u: any) => void;
}

function FormCadastro({
  submit,
  tipo,
  handleChangeIdMecanico,
  handleChangeEmail,
  handleChangeSenha,
  handleChangeConfirmar,
  handleChangeRadio,
  handleChangeApelido,
}: Props) {
  const handleSubmit = (event: any) => {
    event?.preventDefault();
    submit(event);
  };

  return (
    <form id="conteudo-principal" className={style.form} onSubmit={submit}>
      <div>
        <TextLabel htmlFor="email" obrigatorio={true}>
          Endereço de e-mail
        </TextLabel>
        <Input
          id="email"
          classeCSS="email"
          tipo="email"
          placeholder="Digite seu e-mail"
          onChange={handleChangeEmail}
        />
      </div>
      <div>
        <TextLabel htmlFor="senha" obrigatorio={true}>
          Entre com uma senha:
        </TextLabel>
        <Input
          tipo="password"
          placeholder=""
          id="senha"
          onChange={handleChangeSenha}
          classeCSS={""}
        />
      </div>
      <div>
        <TextLabel htmlFor="senha_confirmar" obrigatorio={true}>
          Confirme a senha:
        </TextLabel>
        <Input
          tipo="password"
          placeholder=""
          id="senha_confirmar"
          onChange={handleChangeConfirmar}
          classeCSS={""}
        />
        <p id={style.senha_status}></p>
      </div>
      {tipo === "mecanico" && (
        <div>
          {/* // TODO Validar o CPF ou o MEI */}
          <RadioLabel
            legenda="Identificador da empresa:"
            campos={["CPF", "MEI"]}
            onChange={handleChangeRadio}
            nome="id_mecanico" 
          />
          <Input
            classeCSS="id_mecanico"
            id="id_mecanico"
            tipo="text"
            placeholder="Digite seu CPF"
            onChange={handleChangeIdMecanico}
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
          onChange={handleChangeApelido}
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
