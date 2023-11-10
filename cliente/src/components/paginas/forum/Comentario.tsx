import styles from "./Comentario.module.css";
import IComentario from "../../../modelo/Comentario";
import Usuario from "../../../modelo/Usuario";
import { useState } from "react";

function Comentario({ usuario, titulo, texto, veiculo, data }: IComentario) {
  const [usuarioObj, setUsuario] = useState<Usuario>({
    apelido: "",
    email: "",
    senha: "",
    img: "",
  });

  // TODO pegar objeto usuario no banco  

  return (
    <article className={styles.comentario}>
      <div className={styles.icone_usuario}>
        <img src="https://placehold.co/50" alt="" />
      </div>

      <div className="conteudo_comentario">
        <strong>
          @{usuarioObj.apelido} &bull; {data}
        </strong>

        <h3>
          {titulo} - <i>{veiculo + ""}</i>
        </h3>
        <p>{texto}</p>
      </div>
    </article>
  );
}

export default Comentario;
