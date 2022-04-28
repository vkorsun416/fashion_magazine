import React from 'react';
import css from "./Item.module.css";
import findPropertyValue from "../../service/findPropertyValue";

function Item(props) {
    const {
        item: {
            property,
        },
        index,
    } = props;

    return (
        <div className={css.section}>
            <div className={css.wrap}>
                <a
                    className={css.link}
                    href={findPropertyValue(property, "link")}
                >
                    <span className={css.span}>
                    {"(" + String(index + 1).padStart(2, "0") + ")"}
                    </span>

                    {findPropertyValue(property, "name")}
                </a>
            </div>
        </div>
    );
}

export default Item;
