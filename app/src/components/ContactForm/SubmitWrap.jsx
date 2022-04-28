import React from 'react';
import css from "./SubmitWrap.module.css";

function SubmitWrap(props) {
    const {children} = props;

    return (
        <div className={css.outer}>
            <div className={css.inner}>
                {children}
            </div>
        </div>
    );
}

export default SubmitWrap;