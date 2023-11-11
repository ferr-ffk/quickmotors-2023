import { useEffect, useState } from "react";
import style from "./RespostaComentario.module.css";
import { IRespostaComentario } from "../../../modelo/Comentario";

interface Props {
  idComentario: number;
}

function RespostaComentario({ idComentario }: Props) {
  const [respostas, setRespostas] = useState<IRespostaComentario[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8080/respostas/comentario/${idComentario}`, {
      method: "GET",
      headers: { "Content-type": "application/json" },
    })
      .then((resp) => resp.json())
      .then((data) => setRespostas(data))
      .catch((err) => console.log(err));
  }, [respostas]);

  console.log(respostas);

  return (
    <>
      {respostas.map((resposta) => {
        return (
          <div className={style.resposta}>
            <div className={style.avaliacao}>
              <h4>Resposta</h4>
              <p>
                Avaliação: <span>{resposta.avaliacao}</span>
              </p>
            </div>
            <div className={style.informacoes_resposta}>
              <h3>
                {""} &bull;{" "}
                <span>{resposta.avaliacao} ponto(s)</span>
              </h3>
              <p>{resposta.texto}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default RespostaComentario;
