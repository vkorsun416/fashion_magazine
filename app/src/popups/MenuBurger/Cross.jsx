import React from 'react';
import css from "./Cross.module.css";
import {withPopup} from "../../context/PopupContext/withPopup";

function Cross(props) {
    const {closeMenu} = props;

    return(
        <div className={css.btn}
             onClick={closeMenu}>
            <div className={css.item}>
            </div>
        </div>
    );
}

export default withPopup(Cross);