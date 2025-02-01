import React, {useState} from 'react';
import s from './Item.module.css'
import commonLogo from '../../../Images/commonLogo.png'
import {Card, CardContent, CardMedia, Typography} from "@mui/material";

const NewItem = ({name, category, brand, price, rating, imageUrl}) => {
    const [imageSrc, setImageSrc] = useState(imageUrl);
    const onError = () => {
        setImageSrc(commonLogo);
    }

    return (
        <Card className={s.item} sx={{width: '30%', maxHeight: '30%'}}>
            <CardMedia
                component="img"
                className={s.img}
                image={imageSrc}
                alt="Product Image"
                onError={onError}
            />
            <CardContent>
                <div className={s.body}>
                    <Typography variant={'h4'}>
                        <b>{name}</b>
                    </Typography>
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
            </CardContent>

        </Card>
    )
}

export default NewItem;