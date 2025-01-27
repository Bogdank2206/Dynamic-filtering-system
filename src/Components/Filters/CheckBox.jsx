import React from "react";

const CheckBox = ({name, isChecked, toggleChecked}) => {
    const onChange = () => {
        toggleChecked(name);
    }
    return (
        <div>
            <span>{name}: </span>
            <input type='checkbox' checked={isChecked} onChange={onChange}/>
        </div>
    )
}

export default CheckBox;