import React from 'react';
import {Link} from "react-router-dom";
import css from "./Arrow.module.css";

function Arrow(props) {
    const {text} = props;

    return (
        <Link
            to={`/project/`}
            className={css.link}
        >
            {text}
        </Link>
    );
}

export default Arrow;