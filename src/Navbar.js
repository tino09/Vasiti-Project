import React from 'react';
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core';

export default function Navbar() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start"  color="inherit" aria-label="menu">
                    
                    </IconButton>
                    <Typography variant="h4" >
                         Avios
                    </Typography>
                    <Button  color="inherit">Platform</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
