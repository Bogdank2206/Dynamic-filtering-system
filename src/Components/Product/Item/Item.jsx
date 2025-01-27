import React, {useState} from 'react';
import s from './Item.module.css'
import commonLogo from '../../../Images/commonLogo.png'

const Item = ({name, category, brand, price, rating, imageUrl}) => {
    const [imageSrc, setImageSrc] = useState(imageUrl);
    const onError = () => {
        setImageSrc(commonLogo);
    }
    return (
        <div className={s.item}>
            <div className={s.logo}>
                <img src={imageSrc} alt={name} onError={onError}/>
            </div>
            <div className={s.body}>
                <div>
                    <b>Name: </b>{name}
                </div>
                <div>
                    <b>Category: </b>{category}
                </div>
                <div>
                    <b>Brand: </b>{brand}
                </div>
                <div>
                    <b>Rating: </b>{rating}
                </div>
                <div>
                    <b>Price: </b>{price}
                </div>
            </div>
        </div>
    )
}

export default Item;