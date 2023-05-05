import Rodape from "Componentes/Rodape";
import Contato from "Pages/Contato";
import Inicio from "Pages/Inicio";
import NaoEncontrada from "Pages/NaoEncontrada";
import PaginaPadrao from "Pages/PaginaPadrao";
import Projetos from "Pages/Projetos";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function appRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao></PaginaPadrao>}>
          <Route index element={<Inicio></Inicio>}/>
          <Route path="projetos" element={<Projetos></Projetos>}/>
          <Route path="contato" element={<Contato></Contato>}/>
        </Route> 
        <Route path="*" element={<NaoEncontrada></NaoEncontrada>}/>              
      </Routes> 
      <Rodape></Rodape>  
    </BrowserRouter>
  )
}
