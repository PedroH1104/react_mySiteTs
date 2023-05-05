import styles from './Comentario.module.scss'
import { FaUser } from 'react-icons/fa'

interface ComentarioProps{
  comentario: {
    id: number,
    nome: string
    comentario: string
  }
}

export default function Comentario({comentario}:ComentarioProps) {
  return (
    <div className={styles.comentario}>
      <FaUser className={styles.comentario__icone}></FaUser>
      <div className={styles.comentario__container}>
          <h1>{comentario.nome}</h1> 
          <p>{comentario.comentario}</p>        
      </div>
    </div>    
  )
}
