import Header from "../components/Header/Header"

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";

function Clientes() {
    return(
        <>
        <Header />
        <div className="al-center jc-center d-flex">
                <h1>CLIENTES</h1>
            </div>
        
        <div className="container jc-center d-flex button-home">
            <div className="space-button">
                <Link to="/CadCliente">
                    <Button buttonStyle="home primary">Cadastrar cliente</Button>
                </Link>
            </div>
            <div className="space-button">
                <Link to="/ListClientes">    
                    <Button buttonStyle="home primary">Lista de Clientes</Button>
                </Link>
            </div>
        </div>
        
        </>
    )
}

export default Clientes