import Cookie from "js-cookie";

const RemoveCookie = (nomeCookie: string): void => {
    Cookie.remove(nomeCookie);
}

export default RemoveCookie;