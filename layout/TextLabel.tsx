import { ReactNode } from "react";
import style from "./TextLabel.module.css";

interface Props {
  htmlFor: string;
  children: ReactNode | ReactNode[];
  obrigatorio: boolean;
}

function TextLabel({ htmlFor, children, obrigatorio }: Props) {
  // se for inserido como um campo obrigatório, o label terá um asterisco para indicar
  const classes = obrigatorio
    ? `${style.label} ${style.obrigatorio}`
    : `${style.label}`;

  return (
    <label className={classes} htmlFor={htmlFor}>
      {children}
    </label>
  );
}

export default TextLabel;
