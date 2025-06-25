import Button from "../components/Button/Button"
import Header from "../components/Header/Header"

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Home() {
    return(
        <>
        <Header />

        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
          
        />
        <div className="container jc-center d-flex button-home">
            <div className="space-button">
                <Button buttonStyle="home primary">VENDAS</Button>
            </div>
        </div>
        
        </>
    )
}

export default Home