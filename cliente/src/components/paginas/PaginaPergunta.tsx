import { useEffect, useState } from "react";
import Input from "../form/Input";
import TextLabel from "../form/TextLabel";
import style from "./PaginaPergunta.module.css";
import IComentario from "../../modelo/Comentario";
import GetCookieUsuario from "../../hook/GetCookieUsuario";
import Usuario from "../../modelo/Usuario";
import SelectCampos from "../form/SelectCampos";
import { useNavigate } from "react-router-dom";

const PaginaPergunta = () => {
  const [comentario, setComentario] = useState<IComentario>({
    titulo: "",
    texto: "",
    usuario: "",
    data: "",
    fk_Usuario_id: 0,
    veiculo: "Outros",
  });

  const navigate = useNavigate();

  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  function handleChangeTitulo(e: React.ChangeEvent<HTMLInputElement>): void {
    setComentario({ ...comentario, [e.target.name]: e.target.value });
  }

  function handleChangeTexto(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setComentario({ ...comentario, [e.target.name]: e.target.value });
  }

  function handleChangeTipo(e: React.ChangeEvent<HTMLSelectElement>) {
    setComentario({ ...comentario, veiculo: e.target.selectedOptions[0].value });
  }

  useEffect(() => {
    fetch("http://localhost:8080/usuario", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUsuarios(data);

        const usuario = usuarios.find((u) => u.email === GetCookieUsuario())!;

        setComentario({ ...comentario, fk_Usuario_id: usuario.id_usuario });
      })
      .catch((err) => console.log(err));
  }, []);

  const submit = () => {
    console.log(comentario);
    // a exclamação diz que mesmo podendo ser nulo, eu asseguro q n será

    const dataComentario = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`;

    const veiculoComentario = document.querySelector<HTMLSelectElement>('#tipo')?.selectedOptions[0].value!;

    setComentario({
      ...comentario,
      avaliacao: 0,
      data: dataComentario,
      veiculo: veiculoComentario,
    });

    const titulo = document.querySelector<HTMLInputElement>("#titulo")?.value;
    const texto = document.querySelector<HTMLTextAreaElement>("#texto")?.value;

    const valorInvalido = titulo === "" && texto === "";

    if (valorInvalido) {
      const paragrafo =
        document.querySelector<HTMLParagraphElement>("#mensagem_erro")!;

      paragrafo.innerHTML = "Os valores de texto/título não podem ser vazios!";

      return;
    }

    fetch("http://localhost:8080/comentarios", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(comentario),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <main id="conteudo-principal" className={style.main}>
      <form onSubmit={handleSubmit}>
        <div>
          <TextLabel htmlFor="titulo" obrigatorio={true}>
            Dê um título:
          </TextLabel>
          <Input
            id="titulo"
            tipo="text"
            placeholder="Título"
            classeCSS=""
            onChange={handleChangeTitulo}
          />
        </div>
        <div>
          <TextLabel htmlFor="comentario" obrigatorio={true}>
            Digite sua dúvida:
          </TextLabel>
          <textarea
            cols={60}
            rows={10}
            className={style.comentario}
            name="texto"
            id="texto"
            onChange={handleChangeTexto}
          ></textarea>
        </div>
        <div>
          <SelectCampos
            onChange={handleChangeTipo}
            nome="tipo"
            valores={["Outros", "Moto", "Carro"]}
          />
        </div>
        <div>
          <button className={style.botao_enviar} onClick={submit}>
            Perguntar
          </button>
        </div>
        <p className={style.paragrafo_erro} id="mensagem_erro"></p>
      </form>
    </main>
  );
};

export default PaginaPergunta;
