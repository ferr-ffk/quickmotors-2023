import { db } from "../db.js";

export const getUsuarios = (req, res) => {
  const sql = "SELECT * FROM usuarios";

  db.query(sql, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const getUsuariosPorId = (req, res) => {
  const sql = "SELECT * FROM usuarios WHERE `usuarios`.`id_usuario` = ?";

  db.query(sql, [req.params.id], (err, data) => {
    if(err) return res.json(err);

    return res.status(200).json(req.params.id);
  });
};

export const postUsuarios = (req, res) => {
  const sql = "INSERT INTO usuarios (`email`,`senha`) VALUES(?)"

  const values = [req.body.email, req.body.senha];

  db.query(sql, [values], (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  })
};

export const putUsuarios = (req, res) => {
  // TODO implementar CRUD
};

export const deleteUsuarios = (req, res) => {
  const sql = "DELETE FROM usuarios WHERE `id_usuario` = ?";

  db.query(sql, [req.params.id], (error) => {
    if (error) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso!");
  });
};