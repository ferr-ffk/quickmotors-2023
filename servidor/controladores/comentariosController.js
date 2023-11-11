import { db } from "../db.js";

export const getComentarios = (req, res) => {
  const sql = "SELECT * FROM comentarios";

  db.query(sql, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const getComentarioPorId = (req, res) => {
  const sql = "SELECT * FROM comentarios WHERE `comentarios`.`id` = ?";

  db.query(sql, [req.params.id], (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const postComentario = (req, res) => {
  const sql =
    "INSERT INTO comentarios (`titulo`,`texto`,`avaliacao`,`fk_Usuario_id`) VALUES(?)";

  const values = [
    req.body.titulo,
    req.body.texto,
    req.body.avaliacao,
    req.body.fk_Usuario_id,
  ];

  db.query(sql, [values], (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const putComentario = (req, res) => {
  // TODO implementar CRUD
};

export const deleteComentario = (req, res) => {
  const sql = "DELETE FROM usuarios WHERE `id` = ?";

  db.query(sql, [req.params.id], (error) => {
    if (error) return res.json(err);

    return res.status(200).json("Comentário deletado com sucesso!");
  });
};
