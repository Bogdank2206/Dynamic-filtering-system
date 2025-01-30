import React from 'react';
import {Button} from "@mui/material";

const MyButton = ({text, onClick, styles, ...props}) => (
    <Button size="small"
            variant={'contained'}
            style={{margin: '5px 10px', minWidth: '30%', ...styles}}
            onClick={onClick} {...props}>{text}</Button>
)

export default MyButton;