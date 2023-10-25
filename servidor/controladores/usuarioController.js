import { db } from "../db.js";

export const getUsuarios = (req, res) => {
  const sql = "SELECT * FROM usuarios";

  db.query(sql, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const postUsuarios = (req, res) => {
  const sql = "INSERT INTO usuarios(`nome`, `email`) VALUES(?)";

  const values = [req.body.nome, req.body.email];

  db.query(sql, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário criado com sucesso!");
  });
};

export const putUsuarios = (req, res) => {
  const sql = "UPDATE usuarios SET `nome` = ?, `email` = ? WHERE `id` = ?";

  const values = [req.body.nome, req.body.email];

  // para enviar o id como um parametro da url, altera-se a rota onde é declarada
  //(rotasUsuarios.js) e menciona ela com o req.params
  db.query(sql, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário alterado com sucesso!");
  });

  // [...a] => spread operator, divide o vetor em várias variaveis para que n fique
  // um vetor dentro do outro
};

export const deleteUsuarios = (req, res) => {
  const sql = "DELETE FROM usuarios WHERE `id` = ?";

  db.query(sql, [req.params.id], (error) => {
    if (error) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso!");
  });
};
