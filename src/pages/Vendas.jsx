import Header from "../components/Header/Header"



import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";

function Vendas() {
    return(
        <>
        <Header />
        <div className="al-center jc-center d-flex">
                <h1>VENDAS</h1>
        </div>
        
        <div className="container jc-center d-flex button-home">
            <div className="space-button">
                <Link to="/cadvendas">
                    <Button buttonStyle="home primary">Cadastrar venda</Button>
                </Link>
            </div>
            <div className="space-button">
                <Link to="/listvendas">    
                    <Button buttonStyle="home primary">Lista de vendas</Button>
                </Link>
            </div>
        </div>
        </>
    )
}

export default Vendas