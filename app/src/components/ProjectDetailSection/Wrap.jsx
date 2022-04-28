import React from 'react';
import css from "./Wrap.module.css";

function Wrap(props) {
    const {children} = props;

    return (
        <div className={css.container}>
            <div className={css.grid}>
                <div>
                    {children}
                </div>

                <div className={css.extra}>
                    <div>
                        Services
                    </div>

                    <br/>
                    Production / <br/>
                    Art Direction / <br/>
                    Set Design / <br/>
                    Video
                </div>
            </div>
        </div>
    );
}

export default Wrap;