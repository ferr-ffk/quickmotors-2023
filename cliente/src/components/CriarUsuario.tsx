import { useEffect, useState } from "react";
import Usuario from "../modelo/Usuario";

function CriarUsuario() {
  const [usuario, setUsuario] = useState<Usuario>({
    nomeUsuario: "",
    email: "",
    img: "",
    senha: "",
  });

  const handleSubmit = (usuario: Usuario): void => {
    useEffect(() => {
      fetch("http://localhost:8080/usuario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      })
        .then((resp) => resp.json())
        .then((data) => setUsuario(data))
        .catch((err) => console.log(err));
    }, []);
  };

  const submit = (event: any) => {
    event.preventDefault();
    handleSubmit(usuario);
  };

  return (
    <form>
      <input type="text" placeholder="Nome" />
      <input type="text" placeholder="email" />
      <input type="password" placeholder="senha" />
      <button onClick={submit}>Enviar</button>
    </form>
  );
}

export default CriarUsuario;
