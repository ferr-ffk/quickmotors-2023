import style from "./Pesquisa.module.css";
import { BsSearch } from "react-icons/bs";

// TODO: quando o usuário for pesquisar, tem que mostrar pra ele o que sistema conseguiu achar

function Pesquisa() {
  // se a tela for menor que 480px tem conflito no placeholder
  const isTelaMenorQue440 = !window.matchMedia("(max-width: 767px)").matches;

  return (
    <>
      <input
        className={style.pesquisa}
        placeholder={
          isTelaMenorQue440 ? "Pesquisar dúvidas frequentes" : "Pesquisar..."
        }
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
