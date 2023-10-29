import style from "./Input.module.css";

interface Props {
  id: string;
  tipo: string;
  placeholder: string;
  classeCSS?: string;
  pattern?: string;
}

function Input({ id, placeholder, tipo, classeCSS, pattern }: Props) {
  return (
    <input
      pattern={pattern}
      id={id}
      className={`${style.input} ${style[classeCSS]}`}
      type={tipo}
      placeholder={placeholder}
    />
  );
}

export default Input;
