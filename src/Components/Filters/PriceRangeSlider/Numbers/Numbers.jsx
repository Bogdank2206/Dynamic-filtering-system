import React from "react";
import s from '../PriceRangeSlider.module.css'

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
            <div>Select cost:</div>
            <div className={s.inputs}>
                <input className={s.item}
                       name={'setMinCostNumber'}
                       type="number"
                       value={minCost}
                       onChange={setMin}/>
                <input className={s.item}
                       name={'setMaxCostNumber'}
                       type="number"
                       value={maxCost}
                       onChange={setMax}/>
            </div>
        </div>
    )
}

export default Numbers;