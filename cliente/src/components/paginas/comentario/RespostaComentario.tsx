import style from "./RespostaComentario.module.css";

function RespostaComentario() {
  return (
    <div className={style.resposta}>
      <div className={style.avaliacao}>
        <h4>Resposta</h4>
        <p>
          Avaliação: <span>pipipipopopo</span>
        </p>
      </div>
      <div className={style.informacoes_resposta}>
        <h3>
          Mecânico &bull; <span>13 estrelas</span>
        </h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
          necessitatibus aliquid repellendus soluta dolorem sequi minima
          molestiae aspernatur. Exercitationem dolore iure provident suscipit
          perspiciatis voluptas odit obcaecati iste rerum dicta!
        </p>
      </div>
    </div>
  );
}

export default RespostaComentario;
