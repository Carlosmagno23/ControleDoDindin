import Header from "../components/Header/Header"

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";

function CadProdutos() {
    return(
        <>
        <Header />
        <div className="al-center jc-center d-flex">
                <h1>CADASTRAR PRODUTOS</h1>
            </div>
        <div className="elemento jc-center">
            
            <div className="jc-center-itens">
                <TextField
                    id="filled-textarea"
                    label="Produto"
                    placeholder="Nome do produto"
                    multiline
                    variant="filled"
                />
                <TextField
                    id="filled-textarea"
                    label="Valor"
                    placeholder="Valor do produto"
                    multiline
                    variant="filled"
                />
                 <TextField
                    id="filled-textarea"
                    label="Observação"
                    placeholder="Observação"
                    multiline
                    rows={4}
                    variant="filled"
                />
            </div>
            <div className="jc-center-itens">
               <TextField
                    id="filled-textarea"
                    label="Qt estoque"
                    placeholder="quantidade"
                    multiline
                    variant="filled"
                />
                <Button className="button secondary">Salvar</Button>
            </div>
        </div>
        </>
    )
}

export default CadProdutos