import Cookie from "js-cookie";

const SetCookie = (nomeCookie: string, usrin: string) => {
  Cookie.set(nomeCookie, usrin, {
    expires: 29,
    secure: true,
    sameSite: "strict",
    path: "/",
  });
};

export default SetCookie;