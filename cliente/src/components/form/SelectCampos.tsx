import style from "./SelectCampos.module.css";

interface Props {
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  nome: string;
  valores: any[];
}

function SelectCidades({ onChange, valores, nome }: Props) {
  return (
    <select
      className={style.select}
      onChange={onChange}
      name={nome}
      id={nome}
    >
      {valores.map((valor) => {
        return (
          <option value={valor} key={valor}>
            {valor}
          </option>
        );
      })}
    </select>
  );
}

export default SelectCidades;
