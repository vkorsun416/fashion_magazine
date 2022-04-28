import React from 'react';
import css from "./Description.module.css"

function Description(props) {
    const {title, text, brand} = props;

    return (
        <>
            <div className={css.brand}>
                {brand}
            </div>

            <div className={css.title}>
                {title}
            </div>

            <div className={css.text}>
                {text}
            </div>
        </>
    );
}

export default Description;