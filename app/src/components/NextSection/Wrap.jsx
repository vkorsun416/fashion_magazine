import React from 'react';
import css from "./Wrap.module.css";

function Wrap(props) {
    const {children} = props;

    return (
        <div className={css.black}>
            <div className={css.container}>
                <div className={css.wrap}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Wrap;