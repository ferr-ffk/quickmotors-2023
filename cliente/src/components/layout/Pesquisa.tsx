import style from "./Pesquisa.module.css";
import { BsSearch } from "react-icons/bs";

// TODO: quando o usuário for pesquisar, tem que mostrar pra ele o que sistema conseguiu achar

function Pesquisa() {
  return (
    <>
      <input
        className={style.pesquisa}
        placeholder="Pesquisar dúvidas frequentes"
      ></input>
      <div className={style.icone_pesquisa}>
        <button className={style.botao_pesquisar}>
          <BsSearch />
        </button>
      </div>
    </>
  );
}

export default Pesquisa;
