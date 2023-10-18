import style from "./NavBar.module.css";

import logo from "../../../public/logo-quickmotors.png";
import { AiOutlineMenu } from "react-icons/ai";

import Pesquisa from "./Pesquisa";
import LinkButton from "./LinkButton";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav className={style.nav_bar}>
      <div className={style.menu_esquerda}>
        <div className={style.menu}>
          <AiOutlineMenu />
        </div>
        <Pesquisa />
      </div>
      <div className={style.links}>
        <LinkButton texto="Cadastrar" classCSS="cadastro" para="/cadastro" />
        <LinkButton texto="Login" classCSS="login" para="/login" />
      </div>

      <Link to="/">
        <img src={logo} alt="Logo QuickMotors" />
      </Link>
    </nav>
  );
}

export default NavBar;
