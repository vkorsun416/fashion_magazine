import React from 'react';
import css from "./Description.module.css";

function Description(props) {
    const {title, text} = props;

    return (
        <div className={css.index}>
            <h2 className={css.title}>
                {title}
            </h2>

            <div className={css.text}>
                {text}
            </div>
        </div>
    );
}

export default Description;