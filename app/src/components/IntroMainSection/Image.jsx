import React from 'react';
import css from "./Image.module.css";

function Image(props) {
    return (
        <img
            className={props.color ? css.imgRed : css.imgGrey}
            src={props.image}
            alt="Fashion"
        />
    );
}

export default Image;