import { cidades } from "../../modelo/Cidades";
import style from "./SelectCidades.module.css";

interface Props {
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

function SelectCidades({ onChange }: Props) {
  return (
    <select
      className={style.select}
      onChange={onChange}
      name="cidades"
      id="cidades"
    >
      {cidades.map((cidade) => {
        return (
          <option value={cidade} key={cidade}>
            {cidade}
          </option>
        );
      })}
    </select>
  );
}

export default SelectCidades;
