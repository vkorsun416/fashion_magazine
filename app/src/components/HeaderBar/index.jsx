import React from "react";
import PropTypes from "prop-types";
import MainLink from "./MainLink";
import MenuBtn from "./MenuBtn";
import Wrap from "./Wrap";
import * as themes from "../../layout/themes";
import {withPopup} from "../../context/PopupContext/withPopup";

function HeaderBar(props) {
    const {openMenu, theme} = props;

    return (
        <Wrap>
            <MainLink theme={theme}/>

            <MenuBtn
                theme={theme}
                openMenu={openMenu}
            />
        </Wrap>
    );
}

HeaderBar.propTypes = {
    theme: PropTypes.oneOf(Object.values(themes)),
    openMenu: PropTypes.func.isRequired,
};

export default withPopup(HeaderBar);
