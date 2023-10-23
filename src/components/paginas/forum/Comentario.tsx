import styles from "./Comentario.module.css";
import IComentario from "../../../modelo/IComentario";

function Comentario({ usuario, titulo, texto, veiculo, data }: IComentario) {
  return (
    <article className={styles.comentario}>
      <div className={styles.icone_usuario}>
        <img src="https://placehold.co/50" alt="" />
      </div>

      <div className="conteudo_comentario">
        <strong>
          @{usuario} &bull; {data}
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
