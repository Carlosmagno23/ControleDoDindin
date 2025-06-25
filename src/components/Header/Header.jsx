import { Link } from 'react-router-dom'

// ASSETS

import Logo from '../../assets/dindin-logo.svg'
import './Header.css' 

function Header() {
    return (
        <header className="primary-background">
            <div className='container'>
                <div className='al-center d-flex jc-space-between'>
                    <nav>
                        <ul className='d-flex al-center'>
                            <li><Link to="/"><img src={Logo} className="logo"/></Link></li>
                            <li>< Link to="/">Home </Link> </li>
                            <li>< Link to="/vendas">Vendas</Link></li>
                            <li>< Link to="/produtos">Produtos</Link></li>
                            <li>< Link to="/clientes">Clientes</Link></li>
                            <li>< Link to="/creditos">Creditos</Link></li>
                        
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header