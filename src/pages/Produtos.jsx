import Header from "../components/Header/Header"

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";

function Produtos() {
    return(
        <>
        <Header />
        <div className="al-center jc-center d-flex">
                <h1>PRODUTOS</h1>
            </div>
        
        <div className="container jc-center d-flex button-home">
            <div className="space-button">
                <Link to="/cadprodutos">
                    <Button buttonStyle="home primary">Cadastrar produto</Button>
                </Link>
            </div>
            <div className="space-button">
                <Link to="/listprodutos">    
                    <Button buttonStyle="home primary">Lista de produtos</Button>
                </Link>
            </div>
        </div>
        </>
    )
}

export default Produtos