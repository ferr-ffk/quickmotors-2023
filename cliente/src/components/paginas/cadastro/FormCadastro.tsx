interface Props {
  submit: () => void;
}

function FormCadastro({ submit }: Props) {
  const handleSubmit = (event: any) => {
    event?.preventDefault();
  };

  return (
    <form onSubmit={submit}>
      <button onClick={handleSubmit}>Enviar</button>
    </form>
  );
}

export default FormCadastro;
