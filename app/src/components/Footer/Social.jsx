import React from 'react';
import css from "./Social.module.css";
import {DARK} from "../../layout/themes";

function Social(props) {
    const {theme} = props;

    return (
        <div className={css.wrap}>
            <div className={css.item + " " + (theme === DARK ? css.light : "")}>
                {props.text}
            </div>

            <div className={css.item}>
                <a
                    className={css.link + " " + (theme === DARK ? css.white : "")}
                    href={props.instagram}
                >
                    Instagram
                </a>

                <a
                    className={css.link + " " + (theme === DARK ? css.white : "")}
                    href={props.linkedin}
                >
                    Linkedin
                </a>
            </div>
        </div>
    );
}

export default Social;