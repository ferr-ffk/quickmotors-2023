import styles from "./Comentario.module.css";
import { useNavigate } from "react-router-dom";
import Usuario from "../../../modelo/Usuario";
import { useEffect, useState } from "react";

interface Props {
  id: number;
  usuario: number;

  titulo: string;
  texto: string;

  veiculo: "Carro" | "Moto" | "Outros";

  data: string;
}

function Comentario({ usuario, titulo, texto, veiculo, data, id }: Props) {
  const navigate = useNavigate();
  const [usuarioObj, setUsuario] = useState<Usuario[]>([
    {
      img: "",
      email: "",
      senha: "",
      apelido: "",
    },
  ]);

  // enfim cara, o projeto ta na reta final ja
  // só vou fazer a parte do cookie pra autenticar o usuario
  // dps criar o ngc de fazer duvida
  // talvez se der tempo o ngc de responder a duvida

  useEffect(() => {
    fetch(`http://localhost:8080/usuario/${usuario}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUsuario(data), console.log(usuarioObj);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className={styles.comentario}>
      <a onClick={() => navigate(`/comentarios/${id}/${usuarioObj[0].apelido}`)} href="#">
        <div className={styles.icone_usuario}>
          <img
            src="https://digimedia.web.ua.pt/wp-content/uploads/2017/05/default-user-image.png"
            alt={`Foto de perfil de ${usuarioObj[0].apelido}`}
          />
        </div>
        <div className="conteudo_comentario">
          <strong>
            @
            {usuarioObj[0].apelido !== null
              ? usuarioObj[0].apelido
              : usuarioObj[0].email}{" "}
            &bull; {data}
          </strong>
          <h3>
            {titulo} - <i>{veiculo + ""}</i>
          </h3>
          <p>{texto}</p>
        </div>
      </a>
    </article>
  );
}

export default Comentario;
