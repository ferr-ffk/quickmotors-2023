import express from "express";

const roteador = express.Router();

roteador.get("/", (req, res) => {
  res.send("Obteve usuário");
});

export default roteador;
