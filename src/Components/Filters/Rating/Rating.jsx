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
                        <input id={num}
                               type='checkbox'
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

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
})

export default connect(mapStateToProps, {setMinRating}, mergeProps)(Rating);