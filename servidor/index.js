import express from "express";
import cors from "cors";

import roteador from "./rotasUsuarios.js";

const app = express();

// iremos usar json para armazenar objetos
app.use(express.json());
app.use(cors());

app.use("/cadastrar-usuario", roteador);

// define a porta em que o backend irá hospedar
app.listen(8080);
