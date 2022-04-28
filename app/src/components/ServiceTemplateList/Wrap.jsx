import React from 'react';
import css from "./Wrap.module.css";

function Wrap(props) {
    const {children} = props;

    return (
        <div className={css.section}>
            <div className={css.container}>
                <div className={css.grid}>
                    <img className={css.image}
                        src={props.image}
                        alt="#"
                    />

                    <div className={css.name}>
                        {props.name}
                    </div>

                    {children}
                </div>
            </div>
        </div>
    );
}

export default Wrap;