
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

// PAGES
import Home from './pages/Home'
import Vendas from './pages/Vendas'
import CadVendas from './pages/CadVendas'
import ListVendas from './pages/ListVendas'
import Clientes from './pages/Clientes'
import CadCliente from './pages/CadCliente'
import ListClientes from './pages/ListClientes'
import Produtos from './pages/Produtos'
import CadProdutos from './pages/CadProdutos'
import ListProdutos from './pages/ListProdutos'
import Creditos from './pages/Creditos'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/vendas" element={<Vendas />}></Route>
        <Route path="/cadvendas" element={<CadVendas />}></Route>
        <Route path="/listvendas" element={<ListVendas />}></Route>
        <Route path="/clientes" element={<Clientes />}></Route>
        <Route path="/cadcliente" element={<CadCliente />}></Route>
        <Route path="/listclientes" element={<ListClientes />}></Route>
        <Route path="/produtos" element={<Produtos />}></Route>
        <Route path="/cadprodutos" element={<CadProdutos />}></Route>
        <Route path="/listprodutos" element={<ListProdutos />}></Route>
        <Route path="/creditos" element={<Creditos />}></Route>
      </Routes>
    </Router>
  )
}


export default App
