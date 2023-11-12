import SetCookie from "./SetCookie";

 const SetCookieUsuario = (usuario :string) => {
    SetCookie("usuario", usuario);
}

export default SetCookieUsuario;