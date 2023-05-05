import fotoRodape from 'assets/logo__footer.png'
import styles from './Rodape.module.scss'

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
        <img className={styles.rodape__img} src={fotoRodape} alt='logo do rodape'></img>  
		  <p className={styles.rodape__texto}>&copy; Copyright - Pedro Henrique - 2023</p>
    </footer>
  )
}
