import style from "./PaginaComentario.module.css";
import RespostaComentario from "./RespostaComentario";

export function PaginaComentario() {
  return (
    <main className={style.main}>
      <div className={style.comentario}>
        <div className={style.informacoes_usuario}>
          <img
            className={style.usuario}
            src="https://placehold.co/50"
            alt="Foto de perfil"
          />
          <div>
            <h3>Perfil</h3>
            <h4>há 3 minutos</h4>
          </div>
        </div>

        <div className={style.informacoes_duvida}>
          <h2>Título</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            similique molestiae repellat eum id quasi fugit ad voluptatum harum
            esse, aliquid cumque nam impedit, eaque, eligendi eveniet laudantium
            error a.
          </p>

          <button className={style.botao_responder}>Responder</button>
        </div>
      </div>
      <RespostaComentario
        numero_estrelas={15}
        nome_mecanico="Mecânico"
        avaliacao_mecanico={10}
        texto={"asdawdaawdad"}
      />
    </main>
  );
}

export default PaginaComentario;
