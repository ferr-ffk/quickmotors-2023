import style from "./Input.module.css";

interface Props {
  id: string;
  tipo: string;
  placeholder: string;
  classeCSS: string;
  pattern?: string;
  onChange: ((u: any) => void) | undefined;
}

function Input({ id, placeholder, tipo, classeCSS, pattern, onChange }: Props) {
  return (
    <input
      pattern={pattern}
      id={id}
      name={id}
      className={`${style.input} ${style[classeCSS]}`}
      type={tipo}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default Input;
