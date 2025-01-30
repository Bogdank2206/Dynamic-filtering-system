import React from "react";
import {TextField} from "@mui/material";

const Numbers = ({minCost, maxCost, maxPrice, setMinCost, setMaxCost}) => {
    const setMin = (event) => {
        let valueCost = Math.ceil(Number(event.target.value) * 100) / 100;
        valueCost = Math.min(valueCost, maxPrice);
        valueCost = Math.max(valueCost, 0);
        setMinCost(valueCost);
        valueCost > maxCost && setMaxCost(valueCost);
    }
    const setMax = (event) => {
        let valueCost = Math.ceil(Number(event.target.value) * 100) / 100;
        valueCost = Math.min(valueCost, maxPrice);
        valueCost = Math.max(valueCost, 0);
        setMaxCost(valueCost);
        valueCost < minCost && setMinCost(valueCost);
    }
    return (
        <div>
            <div style={{marginBottom: '3%'}}>
                <b>Select cost:</b>
            </div>
            <div>
                <TextField name={'setMinCostNumber'} type='number'
                           label="Min cost" variant="standard"
                           value={minCost} onChange={setMin}
                           style={{width: '80%', margin: '3%'}}/>
                <TextField name={'setMaxCostNumber'} type='number'
                           label="Max cost" variant="standard"
                           value={maxCost} onChange={setMax}
                           style={{width: '80%', margin: '3%'}}/>
            </div>
        </div>
    )
}

export default Numbers;