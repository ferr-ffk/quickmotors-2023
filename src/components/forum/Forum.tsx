import Comentario from "./Comentario.tsx";
import style from "./Forum.module.css";

function Forum() {
  return (
    <>
      <div className={style.forum}>
        <Comentario
          nomeUsuario={"nando.lxz"}
          titulo={"Meu carro quebrou"}
          texto={"Ai que n sei o que n sei o que lá"}
          tipo={"Moto"}
          data={"Há 10 minutos"}
        />
        <Comentario
          nomeUsuario={"nando.lxz"}
          titulo={"Meu carro quebrou"}
          texto={"Ai que n sei o que n sei o que lá"}
          tipo={"Carro"}
          data={"Há 10 minutos"}
        />
        <Comentario
          nomeUsuario={"nando.lxz"}
          titulo={"Meu carro quebrou"}
          texto={"Ai que n sei o que n sei o que lá"}
          tipo={"Carro"}
          data={"Há 10 minutos"}
        />
        <Comentario
          nomeUsuario={"nando.lxz"}
          titulo={"Meu carro quebrou"}
          texto={"Ai que n sei o que n sei o que lá"}
          tipo={"Carro"}
          data={"Há 10 minutos"}
        />
        <Comentario
          nomeUsuario={"nando.lxz"}
          titulo={"Meu carro quebrou"}
          texto={"Ai que n sei o que n sei o que lá"}
          tipo={"Carro"}
          data={"Há 10 minutos"}
        />
      </div>
    </>
  );
}

export default Forum;
