import { useNavigate } from "react-router-dom";
import Usuario from "../../modelo/Usuario";
import UsuarioForm from "../usuario/UsuarioForm";

function CadastroUsuario() {
  const navigate = useNavigate();

  const createUsuario = (usuario: Usuario) => {
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
    <>
      <h1>QuickMotors</h1>
      <p>Usuário</p>

      <UsuarioForm btnText="Cadastrar" handleSubmit={createUsuario} />
    </>
  );
}

export default CadastroUsuario;
