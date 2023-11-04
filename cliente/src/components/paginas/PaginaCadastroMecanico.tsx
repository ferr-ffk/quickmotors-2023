import PaginaCadastro from "./PaginaCadastro";

function CadastroMecanico() {
  return (
    <PaginaCadastro
      tipoLogin="mecanico"
      linkLogin="login/mecanico"
      submit={function (): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
}

export default CadastroMecanico;
