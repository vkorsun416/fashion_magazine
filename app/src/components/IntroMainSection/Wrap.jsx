import React from 'react';
import css from "./Wrap.module.css";

function Wrap(props) {
    const {children} = props;

    return (
        <div className={css.wrapper}>
            <div className={css.container}>
                <div className={css.gridWrap}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Wrap;
