import React from 'react';
import css from "./Image.module.css";

function Image(props) {
    const {position, image} = props;

    return (
        <img
            className={position ? css.left : css.right}
            src={image}
            alt="img"
        />
    );
}

export default Image;