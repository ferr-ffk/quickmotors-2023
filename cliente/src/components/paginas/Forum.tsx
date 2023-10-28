import LinkButton from "../layout/LinkButton";
import Comentario from "./forum/Comentario";
import style from "./forum/Forum.module.css";

import * as Bi from "react-icons/bi";

function Forum() {
  return (
    <>
      <main className={style.forum}>
        <Comentario
          usuario={"nando.lxz"}
          titulo={"Meu carro quebrou"}
          texto={"Ai que n sei o que n sei o que lá"}
          data={"Há 10 minutos"}
          veiculo={"Carro"}
        />
        <Comentario
          usuario={"nando.lxz"}
          titulo={"Meu carro quebrou"}
          texto={"Ai que n sei o que n sei o que lá"}
          data={"Há 10 minutos"}
          veiculo={"Carro"}
        />
        <Comentario
          usuario={"nando.lxz"}
          titulo={"Meu carro quebrou"}
          texto={"Ai que n sei o que n sei o que lá"}
          data={"Há 10 minutos"}
          veiculo={"Carro"}
        />
        <Comentario
          usuario={"nando.lxz"}
          titulo={"Meu carro quebrou"}
          texto={"Ai que n sei o que n sei o que lá"}
          data={"Há 10 minutos"}
          veiculo={"Carro"}
        />
        <Comentario
          usuario={"nando.lxz"}
          titulo={"Meu carro quebrou"}
          texto={"Ai que n sei o que n sei o que lá"}
          data={"Há 10 minutos"}
          veiculo={"Carro"}
        />
        <Comentario
          usuario={"nando.lxz"}
          titulo={"Meu carro quebrou"}
          texto={"Ai que n sei o que n sei o que lá"}
          data={"Há 10 minutos"}
          veiculo={"Carro"}
        />
        <Comentario
          usuario={"nando.lxz"}
          titulo={"Meu carro quebrou"}
          texto={"Ai que n sei o que n sei o que lá"}
          data={"Há 10 minutos"}
          veiculo={"Carro"}
        />
        <Comentario
          usuario={"nando.lxz"}
          titulo={"Meu carro quebrou"}
          texto={"Ai que n sei o que n sei o que lá"}
          data={"Há 10 minutos"}
          veiculo={"Carro"}
        />
        <Comentario
          usuario={"nando.lxz"}
          titulo={"Meu carro quebrou"}
          texto={"Ai que n sei o que n sei o que lá"}
          data={"Há 10 minutos"}
          veiculo={"Carro"}
        />
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
