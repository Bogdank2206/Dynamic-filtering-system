import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import s from './Product.module.css'
import Item from "./Item/Item";
import MyButton from "../../Common/MyButton";
import {AppBar, Typography} from "@mui/material";

const Title = ({children}) => {
    const styles = {
        textAlign: "center",
        justifyContent: "center",
        width: "100%",
        height: "5%",
        minHeight: "50px",
        backgroundColor: "#9bc38c",
    }
    return <AppBar position="static" style={styles}>
        <Typography variant={'h4'}>
            {children}
        </Typography>
    </AppBar>
}

const Product = ({users, filters, showFilters, setShowFilters}) => {
    const step = 5;
    const isExistFilters = (array) => (Object.values(array).some((el) => (el)));

    const [length, setLength] = useState(step);
    const [usersWithFilters, setUsersWithFilters] = useState(users);

    const [isNeedChanged, setIsNeedChanged] = useState(false);

    const [isExistBrandsFilters, setIsExistBrandsFilters] = useState(false);
    useEffect(() => {
        setIsExistBrandsFilters(isExistFilters(filters.brands));
    }, [filters.brands]);

    const [isExistCategoriesFilters, setIsExistCategoriesFilters] = useState(false);
    useEffect(() => {
        setIsExistCategoriesFilters(isExistFilters(filters.categories));
    }, [filters.categories]);

    const [isExistCostFilters, setIsExistCostFilters] = useState(false);
    useEffect(() => {
        setIsExistCostFilters(filters.cost.minCost !== 0 || filters.cost.maxCost !== filters.cost.maxPrice);
    }, [filters.cost.minCost, filters.cost.maxCost, filters.cost.maxPrice])

    const [isExistRatingFilters, setIsExistRatingFilters] = useState(false);
    useEffect(() => {
        setIsExistRatingFilters(filters.minRating !== 0);
    }, [filters.minRating]);

    useEffect(() => {
        setIsNeedChanged(true);
    }, [filters.brands, filters.categories, filters.cost.minCost,
        filters.cost.maxCost, filters.cost.maxPrice, filters.minRating])

    useEffect(() => {
        if (isNeedChanged) {
            setUsersWithFilters(users.filter((el) => (
                (!isExistBrandsFilters || filters.brands[el.brand]) &&
                (!isExistCategoriesFilters || filters.categories[el.category]) &&
                (!isExistCostFilters || (el.price >= filters.cost.minCost && el.price <= filters.cost.maxCost)) &&
                (!isExistRatingFilters || (el.rating >= filters.minRating))
            )));
            setIsNeedChanged(false);
        }
    }, [isNeedChanged])

    const showMore = () => {
        setLength(length + step);
    }
    const Hide = () => {
        setLength(length - step);
    }
    const onClick = () => {
        setShowFilters(1);
    }

    return (
        <div className={s.product}>
            <Title>Product</Title>
            {
                !showFilters && (
                    <MyButton text={'Show Filters'}
                              onClick={onClick}
                              styles={{maxWidth: '200px', margin: 'min(5%,30px) auto 1%'}}
                              size={'large'}/>
                )
            }
            <div className={s.items}>
                {
                    usersWithFilters.length
                        ? usersWithFilters.slice(0, length).map(user => (<Item key={user.id} {...user}/>))
                        : <h2>Products not found</h2>
                }
            </div>


            {
                length < usersWithFilters.length && (
                    <MyButton text={'Show more'}
                              onClick={showMore}
                              styles={{marginBottom: '100px', minHeight: '50px'}}
                              size={'large'}/>
                )
            }
            {
                length > step && (
                    <MyButton text={'Hide'}
                              onClick={Hide}
                              styles={{marginBottom: '100px', minHeight: '50px'}}
                              size={'large'}/>

                )
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    users: state.users,
    filters: state.filters,
    isNeedChanged: state.filters.isNeedChanged,
})

export default connect(mapStateToProps, null)(Product);