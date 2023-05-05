import CardProjeto from 'Componentes/CardProjeto'
import styles from './Projetos.module.scss'
import projetos from 'json/projetos.json'
import Buscador from 'Componentes/Buscador'
import { useState, useEffect } from 'react';

export default function Projetos() {

  const [busca, setBusca] = useState(""); 
  const [lista, setLista] = useState(projetos)

  function testaBusca(titulo:string) {
    const regex = new RegExp(busca, 'i');                             // não liga para minusculos e maiusculos
      return regex.test(titulo)    
  }

  useEffect(() => {
    const novaLista = projetos.filter(projeto => testaBusca(projeto.titulo)); 
    setLista(novaLista);
  },[busca]) 

  return (
    <main className={styles.projetos}>
      <h1 className={styles.projetos__titulo}>Conheça alguns dos meus projetos!</h1>    
      <Buscador      
        busca={busca} 
        setBusca={setBusca}
      ></Buscador>         
      <ul className={styles.projetos__container}>
        {lista.map((projeto) => (
          <li key={projeto.id}>
            <CardProjeto projeto={projeto}></CardProjeto>
          </li>
        ))}          
      </ul>      
    </main>
  )
}
