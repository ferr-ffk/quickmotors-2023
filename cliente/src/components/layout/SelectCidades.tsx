import { cidades } from "../../modelo/Cidades";

interface Props {
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

function SelectCidades({ onChange }: Props) {
  return (
    <select onChange={onChange} name="cidades" id="cidades">
      {cidades.map((cidade) => {
        return (
          <option value={cidade}>
            <a href="#">{cidade}</a>
          </option>
        );
      })}
    </select>
  );
}

export default SelectCidades;
