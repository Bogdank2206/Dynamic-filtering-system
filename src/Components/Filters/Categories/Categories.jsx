import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {toggleCategoryChecked} from "../../../State manager/FiltersReducer";
import s from './Categories.module.css'
import CheckBox from "../CheckBox";

const Categories = ({categories, categoriesLength, toggleCategoryChecked}) => {
    const step = 3;
    const [length, setLength] = useState(step);
    useEffect(() => {
        if (length < step) {
            setLength(step);
        } else if (categoriesLength < length) {
            setLength(categoriesLength);
        }
    }, [length, categoriesLength]);
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
        !categories
            ? <div className={s.categories}>Categories</div>
            : (
                <div className={s.categories}>
                    <b>Categories</b>
                    {
                        Object.keys(categories).slice(0, length).map(name => (
                            <CheckBox key={name}
                                      name={name}
                                      isChecked={categories[name]}
                                      toggleChecked={toggleCategoryChecked}/>
                        ))
                    }
                    {length < categoriesLength && <button className={s.button} onClick={ShowMore}>Show more</button>}
                    {length > step && <button className={s.button} onClick={Hide}>Hide</button>}
                </div>
            )
    )
}

const mstp = (state) => ({
    categoriesLength: state.filters.categoriesLength,
    categories: state.filters.categories,
})

export default connect(mstp, {toggleCategoryChecked})(Categories);