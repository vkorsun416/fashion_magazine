import React from 'react';
import css from "./Wrap.module.css";

function Wrap(props) {
    const {children, className} = props;

    return (
        <div className={css.section}>
            <div className={css.container}>
                <div className={css.wrap + " " + className}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Wrap;
