import { useState } from "react";
import Usuario from "../../modelo/Usuario";

interface Props {
  btnText: string;
  handleSubmit: (usuario: any) => void;
}

function UsuarioForm({ btnText, handleSubmit }: Props) {
  const [usuario, setUsuario] = useState<Usuario>({
    apelido: "",
    email: "",
    senha: "",

    img: "",
  });

  const submit = (event: any) => {
    event.preventDefault();
    handleSubmit(usuario);
  };

  const handleChange = (event: any) => {
    setUsuario({ ...usuario, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input
          name="nomeUsuario"
          onChange={handleChange}
          type="text"
          placeholder="Nome"
        />
        <input
          name="senha"
          onChange={handleChange}
          type="password"
          placeholder="Senha"
        />
        <input type="password" placeholder="Confirme a senha" />
        <button onClick={handleSubmit}>{btnText}</button>
      </form>
    </div>
  );
}

export default UsuarioForm;
