import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainFooter from './common/MainFooter'
import MainHeader from './common/MainHeader'
import MainNav from './common/MainNav'
import Inicio from './pages/Inicio'
import Inversiones from './pages/Inversiones'
import Proveedores from './pages/Proveedores'
import Empleados from './pages/Empleados'
import Tienda from './pages/Tienda'
import Servicios from "./pages/Servicios";
import Clientes from "./pages/Clientes";


function App() {
  //Comentario
  return (
    <>
      <BrowserRouter>
        <MainHeader />
        <MainNav />
          {/* Comentario */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inversiones" element={<Inversiones />} />
          <Route path="/proveedores" element={<Proveedores />} />
          <Route path="/empleados" element={<Empleados />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/servicios" element={<Servicios></Servicios>} />
          <Route path='/clientes' element={<Clientes></Clientes>}></Route>
        </Routes>

        <MainFooter />
      </BrowserRouter>
    </>
  )
}

export default App
