import React from 'react';
import css from "./FormWrap.module.css";

function FormWrap(props) {
    const {children} = props;

    return (
        <>
            <div className={css.title}>
                Contact:
            </div>

            {children}
        </>
    );
}

export default FormWrap;