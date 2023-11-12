import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import IComentario from "../../../modelo/Comentario";

import RespostasComentarios from "./RespostasComentario";

import style from "./PaginaComentario.module.css";
import Loading from "../../layout/Loading";

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

  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:8080/comentarios/${id}`, {
        method: "GET",
        headers: { "Content-type": "application/json" },
      })
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          setComentario(data[0]);
          setRemoveLoading(true);
        })
        .catch((err) => {
          console.error(err);
        });
    }, 1200);
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

        {!removeLoading && <Loading />}
        <div className={style.informacoes_duvida}>
          <h2>{comentario.titulo}</h2>
          <p>{comentario.texto}</p>

          <button className={style.botao_responder}>Responder</button>
        </div>
      </div>
      <RespostasComentarios idComentario={comentario.id} />
    </main>
  );
}

export default PaginaComentario;
