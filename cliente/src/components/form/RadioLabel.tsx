import style from "./RadioLabel.module.css";

interface Props {
  legenda: string;
  campos: string[];
  onChange: ((u: any) => void) | undefined;
  nome: string;
}

function RadioLabel({ legenda, campos, onChange, nome }: Props) {
  return (
    <>
      <fieldset className={style.fieldset}>
        <legend><span className="acessibilidade">{legenda}</span></legend>

        {campos.map((campo) => {
          return (
            <>
              <input
                onChange={onChange}
                type="radio"
                name={nome}
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
