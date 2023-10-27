import { useState } from "react";

export interface IUsuario {
  nome: string;
  email: string;
}

interface Props {
  handleSubmit: (usuario: any) => void;
}

function CriarUsuario({ handleSubmit }: Props) {
  const [usuario, setUsuario] = useState<IUsuario>({ nome: "", email: "" });

  const handleChange = (event: any) => {
    setUsuario({ ...usuario, [event.target.name]: event.target.value });
  };

  const submit = (event: any) => {
    event.preventDefault();
    handleSubmit(usuario);
  };

  return (
    <form onSubmit={submit}>
      <input
        name="nome"
        onChange={handleChange}
        type="text"
        placeholder="Nome"
      />
      <input
        name="email"
        onChange={handleChange}
        type="text"
        placeholder="email"
      />
      <button onClick={handleSubmit}>Enviar</button>
    </form>
  );
}

export default CriarUsuario;
