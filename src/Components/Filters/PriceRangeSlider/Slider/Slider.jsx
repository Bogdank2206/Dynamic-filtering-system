import React from "react";
import Slider from '@mui/material/Slider';
import {Box} from "@mui/material";

const mySlider = ({minCost, maxCost, maxPrice, setMinCost, setMaxCost}) => {
    const minPercent = minCost / maxPrice * 100;
    const maxPercent = maxCost / maxPrice * 100;

    const setMin = (valuePercent) => {
        valuePercent = valuePercent >= 99 ? 100 : valuePercent;
        valuePercent = valuePercent <= 1 ? 0 : valuePercent;
        const valueCost = Math.ceil(valuePercent * maxPrice) / 100;
        setMinCost(valueCost);
    }
    const setMax = (valuePercent) => {
        console.log(valuePercent);
        valuePercent = valuePercent >= 99 ? 100 : valuePercent;
        valuePercent = valuePercent <= 1 ? 0 : valuePercent;
        const valueCost = Math.ceil(valuePercent * maxPrice) / 100;
        setMaxCost(valueCost);
    }
    const handleChange = (event, newValue) => {
        setMin(newValue[0]);
        setMax(newValue[1]);
    }
    return (
        <Box sx={{margin: '0 auto', width: '80%'}}>
            <Slider
                getAriaLabel={() => 'Cost range'}
                value={[minPercent, maxPercent]}
                onChange={handleChange}
            />
        </Box>
    )
}

export default mySlider;