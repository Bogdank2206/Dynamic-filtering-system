import React, {useEffect, useState} from "react";
import s from './PriceRangeSlider.module.css'
import {connect} from "react-redux";
import {setMinCost, setMaxCost} from "../../../State manager/FiltersReducer";

const useDebounced = (value, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(undefined);
    useEffect(() => {
        const id = setTimeout(() => {
            setDebouncedValue(value);
        }, delay)
        return () => {
            clearTimeout(id);
        }
    })
    return debouncedValue;
}

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
                <input className={s.item} type="number" value={minCost} onChange={setMin}/>
                <input className={s.item} type="number" value={maxCost} onChange={setMax}/>
            </div>
        </div>
    )
}

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
                type='range'
                value={minPercent}
                onChange={setMin}/>
            <input
                className={s.slider}
                type='range'
                value={maxPercent}
                onChange={setMax}/>
        </div>
    )
}

const PriceRangeSlider = (props) => {
    const [minCost, setMinCost] = useState(0);
    const [maxCost, setMaxCost] = useState(props.maxCost);

    const debouncedMinCost = useDebounced(minCost);
    useEffect(() => {
        if (debouncedMinCost !== undefined) {
            props.setMinCost(debouncedMinCost);
        }
    }, [debouncedMinCost]);
    const debouncedMaxCost = useDebounced(maxCost);
    useEffect(() => {
        if (debouncedMaxCost !== undefined && debouncedMaxCost !== -1) {
            props.setMaxCost(debouncedMaxCost);
        }
    }, [debouncedMaxCost]);
    useEffect(() => {
        if (maxCost === -1 && props.maxCost !== -1) {
            setMaxCost(props.maxCost);
        }
    }, [props.maxCost]);

    return (
        <div className={s.rangeContainer}>
            <b>Price Slider</b>
            <Numbers minCost={minCost}
                     maxCost={maxCost}
                     maxPrice={props.maxPrice}
                     setMinCost={setMinCost}
                     setMaxCost={setMaxCost}/>
            <Slider minCost={minCost}
                    maxCost={maxCost}
                    maxPrice={props.maxPrice}
                    setMinCost={setMinCost}
                    setMaxCost={setMaxCost}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    minCost: state.filters.cost.minCost,
    maxCost: state.filters.cost.maxCost,
    maxPrice: state.filters.cost.maxPrice,
})

export default connect(mapStateToProps, {setMinCost, setMaxCost})(PriceRangeSlider);