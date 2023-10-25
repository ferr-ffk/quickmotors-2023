import style from "./Footer.module.css";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className={style.footer}>
      <ul className={style.list}>
        <li className={style.item}>
          <a
            target="_blank"
            href="https://github.com/ferr-ffk/Projeto-Integrador-2023"
          >
            <FaGithub />
          </a>
        </li>
        <li className={style.item}>
          <FaInstagram />
        </li>
        <li className={style.item}>
          <FaFacebook />
        </li>
        <li className={style.item}>
          <FaLinkedin />
        </li>
      </ul>
      <p>
        <a className={style.insta} target="_blank" href="#">
          @quick_motors
        </a>
      </p>
      <p className={style.copyright}>
        <span>QuickMotors &copy; 2023</span>
      </p>
    </footer>
  );
}

export default Footer;
