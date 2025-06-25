import Header from "../components/Header/Header"

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "../components/Button/Button";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';

function Creditos() {
    return(
        <>
        <Header />
        <div className="al-center jc-center d-flex">
                <h1>CREDITOS E DEBITOS</h1>
            </div>
        <div className="elemento jc-center">
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {[1, 2, 3].map((value) => (
            <ListItem
                key={value}
                disableGutters
                secondaryAction={
                <IconButton aria-label="comment">
                <CommentIcon />
                </IconButton>
                }
            >
            <ListItemText secondary={`Line item ${value}`} />
            </ListItem>
            ))}
            </List>
            
            <div className="jc-center-itens">
                <Button className="button secondary">Salvar</Button>
            </div>
        </div>
        </>
    )
}


export default Creditos