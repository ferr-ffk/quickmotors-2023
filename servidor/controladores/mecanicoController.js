import { db } from "../db.js";

export const getMecanico = (req, res) => {
  const sql = "SELECT * FROM mecanicos";

  db.query(sql, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const getMecanicoPorId = (req, res) => {
  const sql = "SELECT * FROM mecanicos WHERE `mecanicos`.`id` = ?";

  db.query(sql, [req.params.id], (err, data) => {
    if(err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const postMecanico = (req, res) => {
  const sql = "INSERT INTO mecanicos (`email`,`senha`) VALUES(?)"

  const values = [req.body.email, req.body.senha];

  db.query(sql, [values], (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  })
};

export const putMecanico = (req, res) => {
  // TODO implementar CRUD
};

export const deleteMecanico = (req, res) => {
  const sql = "DELETE FROM mecanicos WHERE `id_usuario` = ?";

  db.query(sql, [req.params.id], (error) => {
    if (error) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso!");
  });
};