import LinkButton from "../form/LinkButton";
import Comentario from "./forum/Comentario";
import style from "./forum/Forum.module.css";

import * as Bi from "react-icons/bi";

function Forum() {
  return (
    <>
      <main id="conteudo-principal" className={style.forum}>
        {/* // TODO foreach dos comentarios no banco */}
      </main>
      <aside className={style.aside}>
        <LinkButton classCSS="duvida" para="/cadastro">
          <Bi.BiSolidLock />
          Realizar Dúvida
        </LinkButton>
      </aside>
    </>
  );
}

export default Forum;
