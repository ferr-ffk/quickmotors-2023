import style from "./RespostaComentario.module.css";

interface Props {
  numero_estrelas: number;
  nome_mecanico: string;
  avaliacao_mecanico: number;
  texto: string;
}

function RespostaComentario({
  avaliacao_mecanico,
  nome_mecanico,
  numero_estrelas,
  texto,
}: Props) {
  return (
    <div className={style.resposta}>
      <div className={style.avaliacao}>
        <h4>Resposta</h4>
        <p>
          Avaliação: <span>{numero_estrelas}</span>
        </p>
      </div>
      <div className={style.informacoes_resposta}>
        <h3>
          {nome_mecanico} &bull; <span>{avaliacao_mecanico} estrela(s)</span>
        </h3>
        <p>{texto}</p>
      </div>
    </div>
  );
}

export default RespostaComentario;
