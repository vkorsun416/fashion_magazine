import React from "react";
import PropTypes from "prop-types";
import Social from "./Social";
import Wrap from "./Wrap";
import * as themes from "../../layout/themes";

function Footer(props) {
    const {theme, className} = props;

    return (
        <div className={className}>
            <Wrap
                theme={theme}
                copyright="© 2021 - INTERVIEW / All Rights Reserved"
            >
                <Social
                    text="Find us online"
                    instagram="https://www.instagram.com/skalar.ua/"
                    linkedin="https://www.linkedin.com/company/skalar-it/"
                    theme={theme}
                >
                </Social>
            </Wrap>
        </div>
    );
}

Footer.propTypes = {
    theme: PropTypes.oneOf(Object.values(themes))
}

export default Footer;