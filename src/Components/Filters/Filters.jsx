import React, {useEffect} from 'react';
import PriceRangeSlider from "./PriceRangeSlider/PriceRangeSlider";
import Brands from "./Brands/Brands";
import Categories from "./Categories/Categories";
import Rating from "./Rating/Rating";
import s from './Filters.module.css'
import {getUsersData} from "../../State manager/FiltersReducer";
import {connect} from "react-redux";

const Filters = ({users, getUsersData, setShowFilters}) => {
    console.log('filters');
    const onClick = () => {
        setShowFilters(0);
    }

    useEffect(() => {
        getUsersData(users);
    }, [users, getUsersData]);

    return (
        <div className={s.filters}>
            <button className={s.button} onClick={onClick}>Hide Filters</button>
            <Categories/>
            <Brands/>
            <PriceRangeSlider/>
            <Rating/>
        </div>
    )
}

const mstp = (state) => ({
    users: state.users,
})

export default connect(mstp, {getUsersData})(Filters);