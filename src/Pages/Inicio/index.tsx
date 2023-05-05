import styles from './Inicio.module.scss'
import { FaLightbulb } from 'react-icons/fa'
import { IoIosSchool } from 'react-icons/io'
import { BsBookHalf } from 'react-icons/bs'
import { HiInformationCircle }  from 'react-icons/hi' 
import formacaoComplementar from 'json/formacaoComplementar.json'
import habilidades from 'json/habilidades.json'
import { v4 as uuidv4 } from 'uuid';

export default function Inicio() {
  return (
    <main className={styles.inicio}>
        <div className={styles.inicio__grid}>
          <div className={styles.inicio__grid__container}>
              <h2><HiInformationCircle className={styles.inicio__icone}/>Sobre</h2>                
              <p>Meu nome é Pedro Henrique, tenho 22 anos, moro em Recife-PE. Me encontro extremamente motivado, em constante desenvolvimento de minhas habilidades e conhecimentos. Tenho como principal objetivo iniciar minha carreira profissional como Desenvolvedor Front-End.</p>
          </div>

          <div className={styles.inicio__grid__container}>
              <h2><IoIosSchool className={styles.inicio__icone}/>Formação</h2>                
              <p>Ensino Médio - Colégio de São José (2015-2017)</p>
              <p>Curso em Andamento - Licenciatura em Computação na Universidade Federal Rural de Pernambuco(UFRPE)</p>                
          </div>
        </div>
          <div className={styles.inicio__grid}>
            <div className={styles.inicio__grid__container}>
                <h2><FaLightbulb className={styles.inicio__icone}/>Habilidades</h2>                
                <ul>
                    {habilidades.map(habilidade => (
                      <li key={uuidv4()}>{habilidade.nome}</li>
                    ))}
                </ul>                
            </div>

            <div className={styles.inicio__grid__container}>
                <h2><BsBookHalf className={styles.inicio__icone}/>Formação complementar</h2>
                <ul>
                    {formacaoComplementar.map(formacao => (
                      <li key={uuidv4()}><a href={formacao.link} target='blank'>{formacao.nome}</a></li>
                    ))}                    
                </ul>
            </div>
          </div>       
    </main>    
  )
}
