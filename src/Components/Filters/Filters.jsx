import React, {useEffect, useState} from 'react';
import PriceRangeSlider from "./PriceRangeSlider/PriceRangeSlider";
import Brands from "./Brands/Brands";
import Categories from "./Categories/Categories";
import Rating from "./Rating/Rating";
import s from './Filters.module.css'
import {getUsersData} from "../../State manager/FiltersReducer";
import {connect} from "react-redux";
import MyButton from "../../Common/MyButton";

const Filters = ({users, getUsersData, setShowFilters}) => {
    const onClick = () => {
        setShowFilters(0);
    }

    useEffect(() => {
        getUsersData(users);
    }, [users, getUsersData]);

    const [bottomRight, setBottomRight] = useState(false);
    useEffect(() => {
        setBottomRight(window.innerWidth > 600);
    }, [])
    useEffect(() => {
        const change = () => {
            setBottomRight(window.innerWidth > 600);
        }
        window.addEventListener('resize', change);
        return () => {
            window.removeEventListener('resize', change);
        }
    })

    return (
        <div style={{borderRight: bottomRight && '0.5vw solid black'}} className={s.filters}>
            <MyButton text={'Hide Filters'}
                      onClick={onClick}
                      styles={{margin: '5% auto'}}
                      size={'large'}/>
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