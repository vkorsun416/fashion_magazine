import React from 'react';
import {Link} from "react-router-dom";
import css from "./Arrow.module.css";

function Arrow(props) {
    const {text} = props;

    return (
        <div className={css.arrow}>
            <Link
                to={"/contact/"}
                className={css.link}
            >
                {text}
            </Link>
        </div>
    );
}

export default Arrow;