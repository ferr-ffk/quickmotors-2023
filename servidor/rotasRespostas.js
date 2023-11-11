import express from "express";
import {
  getRespostas,
  getRespostaPorId,
  getRespostasPorFk,
  postResposta,
  deleteRespostas,
  putResposta,
} from "./controladores/respostasController.js";

const roteadorRespostas = express.Router();

roteadorRespostas.get("/", getRespostas);
roteadorRespostas.get("/:id", getRespostaPorId);
roteadorRespostas.get("/comentario/:id", getRespostasPorFk);
roteadorRespostas.post("/", postResposta);
roteadorRespostas.put("/:id", putResposta);
roteadorRespostas.delete("/:id", deleteRespostas);

export default roteadorRespostas;