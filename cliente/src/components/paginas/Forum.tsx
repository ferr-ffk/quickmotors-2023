import { useEffect, useState } from "react";
import LinkButton from "../form/LinkButton";
import style from "./forum/Forum.module.css";

import * as Bi from "react-icons/bi";
import Comentario from "./forum/Comentario";
import IComentario from "../../modelo/Comentario";

function Forum() {
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/comentarios", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => setComentarios(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <main id="conteudo-principal" className={style.forum}>
        {comentarios.map(
          (comentario: IComentario) => (
            (
              <Comentario
                id={comentario.id}
                usuario={comentario.fk_Usuario_id}
                titulo={comentario.titulo}
                texto={comentario.texto}

                // TODO: colocar data e veiculo no banco
                veiculo={comentario.veiculo}
                data={comentario.data}
              />
            )
          )
        )}
      </main>
      <aside className={style.aside}>
        <LinkButton classCSS="duvida" para="/cadastro">
          <Bi.BiSolidLock />
          Realizar Dúvida
        </LinkButton>
      </aside>
    </>
  );
}

export default Forum;
