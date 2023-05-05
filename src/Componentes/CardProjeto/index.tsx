import styles from './CardProjeto.module.scss'
import projetos from 'json/projetos.json'

interface CardProjetoProps {
  projeto: typeof projetos[0]
}

export default function CardProjeto({ projeto }: CardProjetoProps ) {
  return (
    <a href={projeto.to} target="blank" className={styles.cardProjeto}>
      <div className={styles.cardProjeto__container}>
        <img
          className={styles.cardProjeto__container__img}
          src={`imgProjetos/${projeto.id}.png`}
          alt='Imagem do projeto'
        ></img>
        <h2 className={styles.cardProjeto__container__titulo}>{projeto.titulo}</h2>
        <p className={styles.cardProjeto__container__descricao}>{projeto.descricao}</p>
        <button className={styles.cardProjeto__container__botao}>Ver</button>
      </div>
    </a>
  )
}
