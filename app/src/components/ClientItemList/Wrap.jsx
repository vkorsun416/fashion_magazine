import React from 'react';
import css from "./Wrap.module.css";

function Wrap(props) {
    const {children} = props;

    return (
        <div className={css.wrap}>
            {children}
        </div>
    );
}

export default Wrap;