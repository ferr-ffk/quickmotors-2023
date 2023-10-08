import { Link } from "react-router-dom";
import style from "./LinkButton.module.css";

interface Props {
  texto: string;
  classCSS: string;
  para: string;
}

function LinkButton({ texto, classCSS, para }: Props) {
  return (
    <Link className={`${style.link_btn} ${style[classCSS]}`} to={para}>
      {texto}
    </Link>
  );
}

export default LinkButton;
