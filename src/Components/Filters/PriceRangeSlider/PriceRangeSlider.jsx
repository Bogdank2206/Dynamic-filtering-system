import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {setMinCost, setMaxCost} from "../../../State manager/FiltersReducer";
import useDebounced from "../../../Hooks/useDebounced";
import Numbers from "./Numbers/Numbers";
import Slider from "./Slider/Slider";
import Title from "../../../Common/Title";

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
        <div>
            <Title>Price Slider</Title>
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

export default connect(mapStateToProps, {
    setMinCost, setMaxCost
})(PriceRangeSlider);