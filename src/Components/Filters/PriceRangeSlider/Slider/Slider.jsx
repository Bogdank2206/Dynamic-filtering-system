import s from "../PriceRangeSlider.module.css";
import React from "react";

const Slider = ({minCost, maxCost, maxPrice, setMinCost, setMaxCost}) => {
    const minPercent = minCost / maxPrice * 100;
    const maxPercent = maxCost / maxPrice * 100;

    const setMin = (event) => {
        let valuePercent = Number(event.target.value);
        valuePercent = valuePercent >= 99 ? 100 : valuePercent;
        valuePercent = valuePercent <= 1 ? 0 : valuePercent;
        const valueCost = Math.ceil(valuePercent * maxPrice) / 100;
        valuePercent > maxPercent && setMaxCost(valueCost);
        setMinCost(valueCost);
    }
    const setMax = (event) => {
        let valuePercent = Number(event.target.value);
        valuePercent = valuePercent >= 99 ? 100 : valuePercent;
        valuePercent = valuePercent <= 1 ? 0 : valuePercent;
        const valueCost = Math.ceil(valuePercent * maxPrice) / 100;
        valuePercent < minPercent && setMinCost(valueCost);
        setMaxCost(valueCost);
    }
    const rangeStyles = {
        left: `${minPercent}%`,
        width: `${maxPercent - minPercent}%`,
    }
    return (
        <div style={{marginTop: '10px', position: 'relative'}}>
            <div className={s.allRange}></div>
            <div style={rangeStyles} className={s.range}></div>
            <input
                className={s.slider}
                name={'setMinCostSlider'}
                type='range'
                value={minPercent}
                onChange={setMin}/>
            <input
                className={s.slider}
                name={'setMaxCostSlider'}
                type='range'
                value={maxPercent}
                onChange={setMax}/>
        </div>
    )
}

export default Slider;