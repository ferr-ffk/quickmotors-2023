import PaginaCadastro from "./PaginaCadastro";

function CadastroMecanico() {
  return (
    <PaginaCadastro
      tipoLogin="mecanico"
      linkLogin="login/mecanico"
      submit={function (): void {
        throw new Error("Function not implemented.");
      } } onChangeEmail={function (u: any): void {
        throw new Error("Function not implemented.");
      } } onChangeSenha={function (u: any): void {
        throw new Error("Function not implemented.");
      } } onChangeConfirmar={function (u: any): void {
        throw new Error("Function not implemented.");
      } } onChangeApelido={function (u: any): void {
        throw new Error("Function not implemented.");
      } }    />
  );
}

export default CadastroMecanico;
