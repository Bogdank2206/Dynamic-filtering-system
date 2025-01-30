import React from 'react';
import {AppBar} from "@mui/material";

const Title = ({children}) => (
    <AppBar style={{margin: '3% auto', padding: '3%'}}
            color="primary"
            position="static">
        <b>{children}</b>
    </AppBar>
)

export default Title;