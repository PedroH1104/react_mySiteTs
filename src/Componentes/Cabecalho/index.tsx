import Nav from 'Componentes/Nav'
import styles from './Cabecalho.module.scss'
import circuloColorido from 'assets/circulo_colorido.png'
import fotoPerfil from 'assets/minha_foto.jpg'
import { AiOutlineMenu } from 'react-icons/ai'
import fotoHeaderMobile from 'assets/logo__footer.png'
import { useState } from 'react'
import classNames from 'classnames'

export default function Cabecalho() { 

    const [aberto, setAberto] = useState(false);
    
    const abrirMenu = () => {
        setAberto(!aberto);
    }

    return (
        <header>
            <section className={styles.desktop}>
                <div className={styles.cabecalho}>
                    <div className={styles.cabecalho__apresentacao}>
                        <h1>Olá, mundo</h1>
                        <p>Bem vindo ao meu site, ele foi desenvolvido utilizando meus conhecimentos em HTML, CSS, JS, React e Typescript. Espero que goste da experiência!</p>
                        <Nav></Nav>                  
                    </div>
        
                    <div className={styles.cabecalho__imagens}>
                        <img
                            className={styles.cabecalho__imagens__circulo}
                            src={circuloColorido}
                            aria-hidden={true}
                            alt='Imagem de um circulo colorido'               
                        />
        
                        <img
                            className={styles.cabecalho__imagens__perfil}
                            src={fotoPerfil}                    
                            alt='Foto de perfil do desenvolvedor'               
                        />  
                    </div>  
                </div>          
            </section>
            <section className={styles.mobile}>                
                <div className={styles.mobile__cabecalho}>
                    <AiOutlineMenu 
                    className={styles.mobile__cabecalho__icone}
                    onClick={abrirMenu}
                    />   
                    <p></p>       
                    <img src={fotoHeaderMobile} alt='logo do header'></img>                       
                </div> 
                <div className={classNames({
                    [styles.mobile__nav]: true,
                    [styles.aparecer]: aberto
                })}>                
                    <Nav></Nav>                
                </div>                 
            </section>
        </header>
    )
}