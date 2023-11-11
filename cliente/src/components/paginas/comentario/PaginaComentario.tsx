import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import IComentario from "../../../modelo/Comentario";

import RespostaComentario from "./RespostaComentario";

import style from "./PaginaComentario.module.css";

export function PaginaComentario() {
  const { id, usuario } = useParams();

  const [comentario, setComentario] = useState<IComentario>({
    titulo: "",
    texto: "",
    id: 0,
    data: "",
    fk_Usuario_id: 0,
    veiculo: "Outros",
  });

  useEffect(() => {
    fetch(`http://localhost:8080/comentarios/${id}`, {
      method: "GET",
      headers: { "Content-type": "application/json" },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setComentario(data[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <main id="conteudo-principal" className={style.main}>
      <div className={style.comentario}>
        <div className={style.informacoes_usuario}>
          <img
            className={style.usuario}
            src="https://digimedia.web.ua.pt/wp-content/uploads/2017/05/default-user-image.png"
            alt={`Foto de perfil`}
          />
          <div>
            <h3>{usuario}</h3>
            <h4>{comentario.data}</h4>
          </div>
        </div>

        <div className={style.informacoes_duvida}>
          <h2>{comentario.titulo}</h2>
          <p>{comentario.texto}</p>

          <button className={style.botao_responder}>Responder</button>
        </div>
      </div>
      <RespostaComentario idComentario={comentario.id} />
    </main>
  );
}

export default PaginaComentario;
