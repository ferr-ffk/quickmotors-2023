import express from "express";
import {
  getUsuarios,
  postUsuarios,
  deleteUsuarios,
  putUsuarios,
  getUsuariosPorId
} from "./controladores/usuarioController.js";

const roteador = express.Router();

roteador.get("/", getUsuarios);
roteador.get("/:id", getUsuariosPorId);
roteador.post("/", postUsuarios);
roteador.put("/:id", putUsuarios);
roteador.delete("/:id", deleteUsuarios);

export default roteador;
