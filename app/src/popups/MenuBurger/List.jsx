import React from 'react';
import css from "./List.module.css";
import {Link} from "react-router-dom";
import {withPopup} from "../../context/PopupContext/withPopup";

function List(props) {
    const {items, closeMenu, className} = props;

    return (
        <div className={css.top}>
            {items.map((item, index) =>
                <div
                    className={css.list}
                    key={item.key}
                >
                    <div className={css.wrap}>
                        <div className={className}>
                            <div className={css.item}>

                                <Link
                                    className={css.link}
                                    to={item.link}
                                    onClick={closeMenu}
                                >
                                <span className={css.number}>
                                 {`(${index + 1})`}
                                </span>
                                    {item.title}

                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default withPopup(List);