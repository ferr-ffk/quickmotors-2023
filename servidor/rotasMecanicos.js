import express from "express";
import {
  getMecanico,
  getMecanicoPorId,
  postMecanico,
  deleteMecanico,
  putMecanico
} from "./controladores/mecanicoController.js";

const roteadorMecanico = express.Router();

roteadorMecanico.get("/", getMecanico);
roteadorMecanico.get("/:id", getMecanicoPorId);
roteadorMecanico.post("/", postMecanico);
roteadorMecanico.put("/:id", putMecanico);
roteadorMecanico.delete("/:id", deleteMecanico);

export default roteadorMecanico;