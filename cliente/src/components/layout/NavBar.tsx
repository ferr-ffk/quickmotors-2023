import style from "./NavBar.module.css";

import logo from "../../../public/logo-quickmotors.png";

import Pesquisa from "../form/Pesquisa.tsx";
import LinkButton from "../form/LinkButton.tsx";
import { Link, useNavigate } from "react-router-dom";
import * as Io5 from "react-icons/io5";
import * as AiIcons from "react-icons/ai";
import { useState } from "react";

import { SidebarData } from "./SideBarData.tsx";
import SelectCidades from "../form/SelectCidades.tsx";
import PularNav from "./PularNav.tsx";

export function NavBar() {
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();

  const mostrarSidebar = () => {
    setSidebar(!sidebar);
    navigate("/#fechar-sidebar");
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    navigate(`/comentarios/${e?.currentTarget.value}`);
  };

  const MenuLateral = () => {
    return (
      <nav
        className={
          sidebar ? style.nav_menu + " " + style.ativo : style.nav_menu
        }
      >
        <Link
          id="fechar-sidebar"
          className={style.fechar_sidebar}
          to="#"
          onClick={mostrarSidebar}
        >
          <AiIcons.AiOutlineClose />
        </Link>
        <h1 id="titulo-nav">QuickMotors</h1>
        <ul className={style.nav_menu_items} onClick={mostrarSidebar}>
          {SidebarData.map((item, indice) => {
            return (
              <li key={indice} className={item.className}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  };

  return (
    <nav className={style.nav_bar}>
      <PularNav />
      <div className={style.menu_esquerda}>
        <div className={style.menu}>
          <Link
            onClick={mostrarSidebar}
            to="#fechar-sidebar"
            className={style.menu_barra}
          >
            <Io5.IoMenuOutline onClick={mostrarSidebar} />
          </Link>
        </div>

        <Pesquisa />

        <SelectCidades onChange={handleSelect} />
      </div>
      <div className={style.links}>
        <LinkButton classCSS="cadastro" para="/cadastro">
          Cadastrar
        </LinkButton>
        <LinkButton classCSS="login" para="/login/usuario">
          Login
        </LinkButton>
      </div>

      <Link to="/">
        <img src={logo} alt="Logo QuickMotors" />
      </Link>

      <MenuLateral />
    </nav>
  );
}

export default NavBar;
