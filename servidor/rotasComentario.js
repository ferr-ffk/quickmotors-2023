import express from "express";
import {
  getComentarios,
  getComentarioPorId,
  postComentario,
  deleteComentario,
  putComentario,
} from "./controladores/comentariosController.js";

const roteadorComentario = express.Router();

roteadorComentario.get("/", getComentarios);
roteadorComentario.get("/:id", getComentarioPorId);
roteadorComentario.post("/", postComentario);
roteadorComentario.put("/:id", putComentario);
roteadorComentario.delete("/:id", deleteComentario);

export default roteadorComentario;
