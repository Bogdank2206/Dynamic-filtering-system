import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {toggleBrandChecked} from "../../../State manager/FiltersReducer";
import MyButton from "../../../Common/MyButton";
import Title from "../../../Common/Title";
import ProductList from "../../../Common/ProductList";

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
            ? <div style={{margin: '3% auto'}}>Brands</div>
            : (
                <div style={{margin: '3% auto'}}>
                    <Title>Brands</Title>
                    <ProductList list={brands}
                                 length={length}
                                 toggleChecked={toggleBrandChecked}/>
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