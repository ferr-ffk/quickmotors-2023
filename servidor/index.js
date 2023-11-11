import express from "express";
import cors from "cors";

import roteador from "./rotasUsuarios.js";
import roteadorMecanico from "./rotasMecanicos.js";
import roteadorComentario from "./rotasComentario.js";
import roteadorRespostas from "./rotasRespostas.js";

const app = express();

// iremos usar json para armazenar objetos
app.use(express.json());
app.use(cors());

app.use("/usuario", roteador);
app.use("/mecanico", roteadorMecanico);
app.use("/comentarios", roteadorComentario);
app.use("/respostas", roteadorRespostas);

// define a porta em que o backend irá hospedar
app.listen(8080);
