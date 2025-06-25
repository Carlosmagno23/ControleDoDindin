import Button from "../components/Button/Button"
import Header from "../components/Header/Header"

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Logo from '../assets/dindin-logo.svg';

function Home() {
    return(
        <>
        <Header />
        <div className="al-center d-flex jc-center">
            <img src={Logo}/>
        </div>
        
        
        </>
    )
}

export default Home