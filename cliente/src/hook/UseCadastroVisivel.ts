import { useState } from "react";

// define o estado do cadastro, se está visível ou não
export default function useCadastroVisivel() {
  const [visivel, setVisivel] = useState(false);

  return {
    cadastroVisivel: visivel,
    exibirCadastro: () => setVisivel(!visivel),
  };
}
