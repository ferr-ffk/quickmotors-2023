import { Link } from "react-router-dom";
import styles from "./PaginaNaoEncontrada.module.css";

function PaginaNaoEncontrada() {
  return (
    <main id="conteudo-principal" className={styles.container_nao_encontrada}>
      <h1>Página não encontrada...</h1>
      <p>
        <Link to="/">Voltar para a página principal</Link>
      </p>
    </main>
  );
}

export default PaginaNaoEncontrada;
