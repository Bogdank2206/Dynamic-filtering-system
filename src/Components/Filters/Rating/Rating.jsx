import React from "react";
import {connect} from "react-redux";
import {setMinRating} from "../../../State manager/FiltersReducer";
import {Rating} from "@mui/material";
import Title from "../../../Common/Title";

const RatingComponent = ({minRating, setMinRating}) => {
    const onChange = (event, newValue) => {
        setMinRating(newValue);
    }
    return (
        <div style={{margin: '0 auto'}}>
            <Title>Rating</Title>
            <Rating size='large'
                    value={minRating}
                    onChange={onChange}/>
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

export default connect(mapStateToProps, {setMinRating}, mergeProps)(RatingComponent);