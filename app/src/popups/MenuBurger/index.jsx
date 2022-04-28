import React from "react";
import Menu from "./Menu";
import items from "./data";
import {withPopup} from "../../context/PopupContext/withPopup";

function MenuBurger(props) {
    const {menuActive} = props;

    return (
        <Menu active={menuActive}/>
    );
}

MenuBurger.defaultProps = items;

export default withPopup(MenuBurger);
