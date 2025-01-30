import React, {useEffect, useState} from 'react';
import s from './Brands.module.css'
import {connect} from "react-redux";
import {toggleBrandChecked} from "../../../State manager/FiltersReducer";
import CheckBox from "../../../Common/CheckBox";
import {Button, Grid2} from "@mui/material";
import MyButton from "../../../Common/MyButton";

const Brands = ({brands, brandsLength, toggleBrandChecked}) => {
    const step = 3;
    const [length, setLength] = useState(step);
    useEffect(() => {
        if (length < step) {
            setLength(step);
        } else if (brandsLength && brandsLength < length) {
            setLength(brandsLength);
        }
    }, [length, brandsLength]);

    const ShowMore = () => {
        setLength(length + step);
    }
    const Hide = () => {
        if (length % step !== 0) {
            setLength(length - length % step);
        } else {
            setLength(length - step);
        }
    }

    return (
        !brands
            ? <div className={s.brands}>Brands</div>
            : (
                <div className={s.brands}>
                    <b>Brands</b>
                    {
                        Object.keys(brands).slice(0, length).map(name => (
                            <CheckBox key={name}
                                      name={name}
                                      isChecked={brands[name]}
                                      toggleChecked={toggleBrandChecked}/>
                        ))
                    }
                    {length < brandsLength && <MyButton text={'Show More'} onClick={ShowMore}/>}
                    {length > step && <MyButton text={'Hide'} onClick={Hide}/>}
                </div>
            )
    )
}

const mapStateToProps = (state) => ({
    brandsLength: state.filters.brandsLength,
    brands: state.filters.brands,
})

export default connect(mapStateToProps, {toggleBrandChecked})(Brands);