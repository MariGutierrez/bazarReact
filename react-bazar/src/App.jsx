import CajaBusqueda from "./pages/CajaBusqueda"
import './App.css'
import Navbar from "./components/Navbar"
import { Route, Routes, BrowserRouter as Router} from "react-router-dom"
import Resultados from "./pages/Resultados"
import Detalle from "./pages/Detalle"
import Compra from "./pages/Compra"

const App = () => {
  return (
    <>
      <Router>
      <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<CajaBusqueda />} />
            <Route path="/items" element={<Resultados />} />
            <Route path="/item/:id" element={<Detalle />} />
            <Route path="/sales" element={<Compra />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
