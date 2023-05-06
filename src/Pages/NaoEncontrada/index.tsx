import Nav from 'Componentes/Nav'
import styles from './NaoEncontrada.module.scss'
import erro404 from 'assets/erro_404.png'
import Cabecalho from 'Componentes/Cabecalho'

export default function NaoEncontrada() {
  return (
    <main>
      <section className={styles.desktop}>
        <div className={styles.nav}>
          <Nav></Nav>
        </div>
      </section>

      <section className={styles.mobile}>
        <Cabecalho></Cabecalho>
      </section>         

      <div className={styles.container}>
        <div className={styles.container__conteudo}>
            <span className={styles.container__conteudo__error}>404</span>
            <h1>Ops! Página não encontrada.</h1>
            <p>Tem certeza de que era isso que você estava procurando?</p>
            <p>Aguarde uns instantes e recarregue a página, ou volte para a página inicial.</p>
        </div>
        <img
              className={styles.container__imagem}
              src={erro404}
              alt="Cachorro de óculos e vestido como humano"
        />
      </div>        
    </main>
  )
}
