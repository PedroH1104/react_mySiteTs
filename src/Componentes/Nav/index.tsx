import styles from './Nav.module.scss'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { ImHome, ImFolderOpen } from 'react-icons/im'
import { MdOutlineContactMail } from 'react-icons/md'
import LinkNav from 'Componentes/LinkNav'



export default function Nav() {
  return (
    <nav className={styles.nav}>
      <LinkNav  to="/" icone={<ImHome className={styles.nav__icone}></ImHome>}>Início</LinkNav>
      <LinkNav to="/projetos" icone={<ImFolderOpen className={styles.nav__icone}/>}>Projetos</LinkNav>
      <LinkNav to="/contato" icone={<MdOutlineContactMail className={styles.nav__icone}/>}>Contato</LinkNav>
      <a className={styles.nav__a} href={"https://www.linkedin.com/in/pedro-henrique-534a941b5/"} target='blank'><BsLinkedin className={styles.nav__icone}/>Linkedin</a>
      <a className={styles.nav__a} href={"https://github.com/PedroH1104?tab=repositories"} target='blank'><BsGithub className={styles.nav__icone}/>Github</a>
    </nav>
  )
}

