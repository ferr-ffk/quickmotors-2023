import { ReactNode } from "react";
import style from "./Container.module.css";

interface Props {
  classCSS: string;
  children: ReactNode[] | ReactNode;
}

function Container({ classCSS, children }: Props) {
  return (
    <div className={`${style.container} ${style[classCSS]}`}>{children}</div>
  );
}

export default Container;
