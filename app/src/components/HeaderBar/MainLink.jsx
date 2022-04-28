import React from "react";
import {Link, Route, Switch} from "react-router-dom";
import css from './MainLink.module.css';
import {LIGHT} from "../../layout/themes";

function MainLink(props) {
    const {theme} = props;

    return (
        <Switch>
            <Route
                path={"/"}
                strict
                exact
            >
                <div className={css.text + " " + (theme === LIGHT ? css.light : "")}>
                    INTERVIEW
                </div>
            </Route>

            <Route>
                <Link
                    to={"/"}
                    className={css.link}
                >
                    <div className={css.texts + " " + (theme === LIGHT ? css.light : "")}>
                        INTERVIEW
                    </div>
                </Link>
            </Route>
        </Switch>
    );
}

export default MainLink;
