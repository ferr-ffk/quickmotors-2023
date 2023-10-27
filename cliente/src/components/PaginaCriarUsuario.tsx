import CriarUsuario, { IUsuario } from "./CriarUsuario";
import { useNavigate } from "react-router-dom";

function PaginaCriarUsuario() {
  const navigate = useNavigate();

  const createUsuario = (usuario: IUsuario) => {
    fetch("http://localhost:8080/usuario", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(usuario),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data), navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Criar Usuário</h1>
      <CriarUsuario handleSubmit={createUsuario} />
    </div>
  );
}

export default PaginaCriarUsuario;
