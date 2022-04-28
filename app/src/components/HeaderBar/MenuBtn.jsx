import React from "react";
import css from "./MenuBtn.module.css";
import {LIGHT} from "../../layout/themes";

function MenuBtn(props) {
    const {openMenu, theme} = props;

    return (
        <div
            className={css.btn + " " + (theme === LIGHT ? css.dark : "")}
            onClick={openMenu}
        >
            <div className={css.item + " " + (theme === LIGHT ? css.dark : "")}/>
        </div>
    );
}

export default MenuBtn;
