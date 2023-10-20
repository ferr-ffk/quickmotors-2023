import style from "./NavBar.module.css";

import logo from "../../../public/logo-quickmotors.png";

import Pesquisa from "./Pesquisa";
import LinkButton from "./LinkButton";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { useState } from "react";

import { SidebarData } from "./SideBarData.tsx";

export function NavBar() {
  const [sidebar, setSidebar] = useState(false);

  const mostrarSidebar = () => setSidebar(!sidebar);

  const MenuLateral = () => {
    return (
      <aside
        className={
          sidebar ? style.nav_menu + " " + style.ativo : style.nav_menu
        }
      >
        <Link className={style.fechar_sidebar} to="#" onClick={mostrarSidebar}>
          <AiIcons.AiOutlineClose />
        </Link>
        <h1>QuickMotors</h1>
        <ul className={style.nav_menu_items} onClick={mostrarSidebar}>
          {SidebarData.map((item, indice) => {
            return (
              <li key={indice} className={item.className}>
                <Link to={item.path}>
                  {item.icon}
                  <span>
                    <strong>{item.title}</strong>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    );
  };

  return (
    <nav className={style.nav_bar}>
      <div className={style.menu_esquerda}>
        <div className={style.menu}>
          <Link to="#" className={style.menu_barra}>
            <FaBars onClick={mostrarSidebar} />
          </Link>
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

      <MenuLateral />
    </nav>
  );
}

export default NavBar;
