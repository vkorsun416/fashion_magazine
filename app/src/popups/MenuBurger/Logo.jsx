import React from 'react';
import css from "./Logo.module.css";
import {Link} from "react-router-dom";
import {withPopup} from "../../context/PopupContext/withPopup";

function Logo(props) {
    const {closeMenu} = props;

    return (
        <Link
            to={"/"}
            className={css.link}
            onClick={closeMenu}
        >
            <div className={css.text}>INTERVIEW</div>
        </Link>
    );
}

export default withPopup(Logo);