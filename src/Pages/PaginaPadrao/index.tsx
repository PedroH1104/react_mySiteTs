import Cabecalho from 'Componentes/Cabecalho'
import Container from 'Componentes/Container'
import { Outlet } from 'react-router-dom'

export default function PaginaPadrao() {  

  return (
    <main>        
        <Cabecalho></Cabecalho>
        <Container>
            <Outlet></Outlet>
        </Container>
    </main>
  )
}
