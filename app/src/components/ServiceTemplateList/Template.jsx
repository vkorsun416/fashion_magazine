import React from 'react';
import css from "./Template.module.css";
import findPropertyValue from "../../service/findPropertyValue";

function Template(props) {

    const {
        item: {
            property,
        },
    } = props;

    return (
        <>
            <div className={css.pale}>
                <div className={css.title}>
                    {findPropertyValue(property, "name")}
                </div>

                <p className={css.text}>
                    {findPropertyValue(property, "production")}
                </p>
            </div>
            <div className={css.pale + " " + css.column}>
                <div className={css.title}>
                    {findPropertyValue(property, "design")}
                </div>

                <p className={css.text}>
                    {findPropertyValue(property, "description")}
                </p>
            </div>
        </>
    );
}

export default Template;