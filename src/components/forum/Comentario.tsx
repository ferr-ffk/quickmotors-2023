import styles from "./Comentario.module.css";

interface Props {
  nomeUsuario: string;
  titulo: string;
  texto: string;
  tipo: "Carro" | "Moto" | "Outro";
  data: string;
}

function Comentario({ nomeUsuario, titulo, texto, tipo, data }: Props) {
  return (
    <div className={styles.comentario}>
      <div className={styles.icone_usuario}>
        <img src="https://placehold.co/50" alt="" />
      </div>

      <div className="conteudo_comentario">
        <strong>
          @{nomeUsuario} &bull; {data}
        </strong>

        <h3>
          {titulo} - <i>{tipo}</i>
        </h3>
        <p>{texto}</p>
      </div>
    </div>
  );
}

export default Comentario;
