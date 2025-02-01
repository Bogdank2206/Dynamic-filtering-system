import React from 'react';
import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";

const ProductList = ({list, length, toggleChecked}) => {
    const styles = {
        margin: '0 50%',
        transform: 'translateX(-50%)',
    }
    return (
        <FormGroup>
            {
                Array.from({...Object.keys(list), length}, (name, idx) => (
                    <FormControlLabel key={idx}
                                      style={styles}
                                      control={<Checkbox/>}
                                      checked={list[name]}
                                      label={name}
                                      onChange={() => toggleChecked(name)}/>
                ))
            }
        </FormGroup>
    )
}

export default ProductList;