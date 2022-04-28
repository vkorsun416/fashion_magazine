import React from 'react';
import css from "./InputWrap.module.css";

function InputWrap(props) {
    const {children} = props;

    return (
        <div className={css.outer}>
            <div className={css.inner}>
                {children}
            </div>
        </div>
    );
}

export default InputWrap;