import React from 'react';
import s from './Header.module.css';
import {Toolbar, Typography} from "@mui/material";

const Header = () => {
    return (
        <header className={s.header}>
            <Toolbar>
                <Typography variant="h4" component="div">
                    Header Component
                </Typography>
            </Toolbar>
        </header>
    )
}

export default Header;