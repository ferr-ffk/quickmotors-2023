import { Link } from "react-router-dom";
import style from "./LinkButton.module.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
  classCSS: string;
  para: string;
}

function LinkButton({ children, classCSS, para }: Props) {
  return (
    <Link className={`${style.link_btn} ${style[classCSS]}`} to={para}>
      {children}
    </Link>
  );
}

export default LinkButton;
