import { useState } from 'react'
import styles from './Contato.module.scss'
import { GrInstagram } from 'react-icons/gr';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephoneFill } from 'react-icons/bs';
import CampoTexto from 'Componentes/CampoTexto';
import Comentario from 'Componentes/Comentario';
import { v4 as uuidv4 } from 'uuid';


export default function Contato() { 

  const [nome, setNome] = useState('');
  const [comentario, setComentario] = useState('');
  const [comentarios, setComentarios] = useState([{id: 1, nome:"Andressa Laynne", comentario:"Ficou lindo, amor! Parabéns!!"}, {id:2, nome:"Maximus Lazaro", comentario:"Ficou muito massa, pepeu!!"}, {id:3, nome:"Joao Victor", comentario:"Muito legal, vou me inspirar para fazer meu site"}]) 

  const submitComentario = (comentario) => {
    setComentarios([...comentarios, comentario]);
  }

  const aoSubmeter = (evento) => {
    evento.preventDefault();
    submitComentario({
      id: uuidv4(),
      nome, 
      comentario
    })
    setNome("")
    setComentario("")
  }

  return (
    <main className={styles.contato}> 
      <form className={styles.contato__form} onSubmit={aoSubmeter}>
        <h1>Deixe seu comentário:</h1>
        <CampoTexto
          label="Seu Nome:" 
          placeholder="Joaquim Nabuco"
          valor={nome}
          aoAlterar={valor => setNome(valor)}>
        </CampoTexto>
        <CampoTexto 
          label="Deixe seu comentario" 
          placeholder="Digite aqui seu comentário"
          valor={comentario}
          aoAlterar={valor => setComentario(valor)}>
        </CampoTexto>
        <button>Enviar comentário</button>
      </form>

      <div className={styles.contato__comentarios}>
        <h2>Comentários</h2>
        {comentarios.map(comentario => (
          <Comentario comentario={comentario} key={comentario.id}></Comentario>
        ))}
      </div>      

      <h2 className={styles.contato__titulo}>Outros meios de contato:</h2>      
      <p className={styles.contato__opcao}><a href="https://www.instagram.com/pedro_h1104/"><GrInstagram className={styles.contato__opcao__icone}/>Instagram</a></p>      
      <p className={styles.contato__opcao}><BsTelephoneFill className={styles.contato__opcao__icone}/>(81) 99948-4942</p>
      <p className={styles.contato__opcao}><AiOutlineMail className={styles.contato__opcao__icone}/>pedrohenrique110401@outlook.com</p>
      </main>
  )
}


