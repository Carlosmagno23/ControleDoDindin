import Header from "../components/Header/Header"

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";

function CadVendas() {
    return(
        <>
        <Header />
        <div className="al-center jc-center d-flex">
                <h1>CADASTRAR VENDAS</h1>
            </div>
        <div className="elemento jc-center">
            
            <div className="jc-center-itens">
                <TextField
                    id="filled-textarea"
                    label="Nome"
                    placeholder="Nome do cliente"
                    multiline
                    variant="filled"
                />
                <TextField
                    id="filled-textarea"
                    label="Telefone"
                    placeholder="Numero de telefone"
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
                <Button className="button secondary">Salvar</Button>
            </div>
        </div>
        </>
    )
}

export default CadVendas