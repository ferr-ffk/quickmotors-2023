import { useEffect, useState } from "react";
import LinkButton from "../form/LinkButton";
import style from "./forum/Forum.module.css";

import * as Bi from "react-icons/bi";
import Comentario from "./forum/Comentario";
import IComentario from "../../modelo/Comentario";
import Loading from "../layout/Loading";
import GetCookieUsuario from "../../hook/GetCookieUsuario";

function Forum() {
  const [comentarios, setComentarios] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);

  // TODO: falta só a pagina de realizar duvida que o pai ta feito

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8080/comentarios", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setComentarios(data);

          // após obtido os comentarios, remove o loading
          setRemoveLoading(true);
        })
        .catch((err) => console.log(err));
    }, 1200);
  }, []);

  return (
    <>
      {/* eqto os comentarios tão sendo pegos no banco, há  componente de loading */}
      {!removeLoading && <Loading />}
      <main id="conteudo-principal" className={style.forum}>
        {comentarios.map((comentario: IComentario) => (
          <Comentario
            id={comentario?.id}
            usuario={comentario.fk_Usuario_id}
            titulo={comentario.titulo}
            texto={comentario.texto}
            veiculo={comentario.veiculo}
            data={comentario.data}
          />
        ))}
      </main>
      <aside className={style.aside}>
        {/* aqui se o cookie de usuário for nulo, significa que o usuario n está logado,
        e não poderá realizar uma duvida; agora se ele estiver, será redirecionado 
        para a página de pergunta */}
        {!GetCookieUsuario() ? (
          <LinkButton classCSS="duvida_nao_cadastrado" para="/cadastro">
            <Bi.BiSolidLock />
            Realizar Dúvida
          </LinkButton>
        ) : (
          <LinkButton classCSS="duvida_cadastrado" para="perguntar">
            Realizar Dúvida
          </LinkButton>
        )}
      </aside>
    </>
  );
}

export default Forum;
