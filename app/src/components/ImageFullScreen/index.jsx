import React from "react";
import css from "./index.module.css";

function ImageFullScreen(props) {
    const {img} = props;

    return (
        <div
            className={css.pic}
            style={{backgroundImage: `url(${img})`}}
        >
        </div>
    );
}

export default ImageFullScreen;