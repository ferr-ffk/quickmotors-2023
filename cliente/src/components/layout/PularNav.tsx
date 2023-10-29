import style from "./PularNav.module.css";

function PularNav() {
  // para usuários usando tab para ver o site, é necessário ter
  // um link para pular para o conteúdo principal, para não ter
  // que atravessar a nav inteira
  return (
    <a className={style.pular_nav} href="#conteudo-principal">
      Pular para conteúdo principal
    </a>
  );
}

export default PularNav;
