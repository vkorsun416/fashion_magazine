import React from 'react';
import {Link} from "react-router-dom";
import css from "./Arrow.module.css";

function Arrow() {
    return (
        <div className={css.arrow}>
            <Link
                to={"/about/"}
                className={css.link}
            >
                About us
            </Link>
        </div>
    );
}

export default Arrow;