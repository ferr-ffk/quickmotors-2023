import * as TbIcons from "react-icons/tb";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Perfil",
    path: "/perfil",
    icon: <AiIcons.AiOutlineUser />,
    className: "nav_text",
  },
  {
    title: "Notificações",
    path: "/notificacoes",
    icon: <IoIcons.IoMdNotifications />,
    className: "nav_text",
  },
  {
    title: "Mensagens",
    path: "/mensagens",
    icon: <TbIcons.TbMessages />,
    className: "nav_text",
  },
];
