import style from "./RadioLabel.module.css";

interface Props {
  legenda?: string;
  campos: string[];
  onChange: () => void;
}

function RadioLabel({ legenda, campos, onChange }: Props) {
  return (
    <>
      <fieldset className={style.fieldset}>
        <legend>{legenda}</legend>

        {campos.map((campo) => {
          return (
            <>
              <input
                onChange={onChange}
                type="radio"
                name="id_mecanico"
                id={campo}
              />
              <label htmlFor={campo}>{campo}</label>
            </>
          );
        })}
      </fieldset>
    </>
  );
}

export default RadioLabel;
