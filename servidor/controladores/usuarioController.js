import { db } from "../db.js";

export const getUsuarios = (req, res) => {
  const sql = "SELECT * FROM usuarios";

  db.query(sql, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const postUsuarios = (req, res) => {
  // TODO implementar CRUD
};

export const putUsuarios = (req, res) => {
  // TODO implementar CRUD
};

export const deleteUsuarios = (req, res) => {
  // TODO implementar CRUD
};
