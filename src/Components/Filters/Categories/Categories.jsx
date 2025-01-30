import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {toggleCategoryChecked} from "../../../State manager/FiltersReducer";
import s from './Categories.module.css'
import CheckBox from "../../../Common/CheckBox";
import MyButton from "../../../Common/MyButton";

const Categories = ({categories, categoriesLength, toggleCategoryChecked}) => {
    const step = 3;
    const [length, setLength] = useState(step);
    useEffect(() => {
        if (length < step) {
            setLength(step);
        } else if (categoriesLength && categoriesLength < length) {
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
                        Array.from({...Object.keys(categories), length}, (name, idx) => (
                            <CheckBox key={idx}
                                      name={name}
                                      isChecked={categories[name]}
                                      toggleChecked={toggleCategoryChecked}/>
                        ))
                    }

                    {length < categoriesLength && <MyButton text={'Show More'} onClick={ShowMore}/>}
                    {length > step && <MyButton text={'Hide'} onClick={Hide}/>}
                </div>
            )
    )
}

const mstp = (state) => ({
    categoriesLength: state.filters.categoriesLength,
    categories: state.filters.categories,
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
})

export default connect(mstp, {toggleCategoryChecked}, mergeProps)(Categories);

// const sixButtons = () => {
//     return <div>
//         {Array.from({length: 6}, (_, idx) => {
//             return <input key={idx} type={'checkbox'}/>
//         })}
//     </div>
// }

// export default sixButtons;

