import React from 'react';
import s from './Header.module.css'
import {AppBar, Toolbar, Typography} from "@mui/material";

const Header = () => {
    return (
        // <AppBar style={{padding: '10px', backgroundColor: '#b8b82c', color: 'black'}}>
        //     <Toolbar>
        //         <Typography variant="h3" component="div">
        //             Header Component
        //         </Typography>
        //     </Toolbar>
        // </AppBar>
        <div>
            <b>Header Component</b>
        </div>
    )
}

export default Header;