import Cookie from "js-cookie";

const GetCookie = (nomeCookie: string) => {
  return Cookie.get(nomeCookie);
};

export default GetCookie;