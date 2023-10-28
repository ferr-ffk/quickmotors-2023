import style from "./Input.module.css";

interface Props {
  id: string;
  tipo: string;
  placeholder: string;
  classeCSS?: string;
}

function Input({ id, placeholder, tipo, classeCSS }: Props) {
  return (
    <input
      id={id}
      className={`${style.input} ${style[classeCSS]}`}
      type={tipo}
      placeholder={placeholder}
    />
  );
}

export default Input;
