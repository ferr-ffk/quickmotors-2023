import { db } from "../db.js";

export const getRespostas = (req, res) => {
  const sql = "SELECT * FROM resposta_comentarios";

  db.query(sql, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const getRespostaPorId = (req, res) => {
  const sql =
    "SELECT * FROM resposta_comentarios WHERE `resposta_comentarios`.`id` = ?";

  db.query(sql, [req.params.id], (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const getRespostasPorFk = (req, res) => {
  const sql =
    "SELECT * FROM resposta_comentarios WHERE `resposta_comentarios`.fk_comentarios_id = ?";

  db.query(sql, [req.params.id], (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const postResposta = (req, res) => {
  const sql =
    "INSERT INTO resposta_comentarios (`texto`,`avaliacao`) VALUES(?)";

  const values = [req.body.texto, req.body.avaliacao];

  db.query(sql, [values], (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const putResposta = (req, res) => {
  // TODO implementar CRUD
};

export const deleteRespostas = (req, res) => {
  const sql = "DELETE FROM respostas WHERE `id` = ?";

  db.query(sql, [req.params.id], (error) => {
    if (error) return res.json(err);

    return res.status(200).json("Resposta deletada com sucesso!");
  });
};
