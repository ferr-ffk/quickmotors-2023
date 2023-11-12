import loading from "../../../public/icons8-loading-96.png";
import style from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={style.loader_container}>
        <img className={style.loader} src={loading} alt="Carregando" />
    </div>
  )
}

export default Loading