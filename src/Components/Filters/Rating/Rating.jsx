import React from "react";
import s from './Rating.module.css'
import {connect} from "react-redux";
import {setMinRating} from "../../../State manager/FiltersReducer";

const Rating = ({minRating, setMinRating}) => {
    const numbers = [1, 2, 3, 4];
    return (
        <div className={s.rating}>
            <b>Rating</b>
            {
                numbers.map(num => (
                    <div key={num}>
                        <input type='checkbox'
                               checked={num === minRating}
                               onChange={() => {
                                   num === minRating
                                       ? setMinRating(0)
                                       : setMinRating(num);
                               }}/>
                        <span>{num} и выше</span>
                    </div>
                ))
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    minRating: state.filters.minRating,
})

export default connect(mapStateToProps, {setMinRating})(Rating);