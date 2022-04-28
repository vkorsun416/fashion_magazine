import React from 'react';
import css from "./DoublePics.module.css";
import {Link} from "react-router-dom";
import findPropertyValue from "../../service/findPropertyValue";
import getStaticPath from "../../service/getStaticPath";

function DoublePics(props) {
    const {
        item: {
            slug,
            property,
            image,
        },
        index
    } = props;

    return (
        <div className={css.container}>
            <div className={css.grid}>
                <div className={css.details}>
                    <h3 className={css.num}>
                        {String(index + 1).padStart(2, "0")}
                    </h3>

                    <h3 className={css.subtitle}>
                        {findPropertyValue(property, 'brand')}
                    </h3>
                </div>

                <img className={css.imgLilac}
                     src={getStaticPath((findPropertyValue(image, 'swiper'))?.[1])}
                     alt="img"
                />

                <div className={css.wrap}>
                    <h2 className={css.title}>
                        {findPropertyValue(property, 'title')}
                    </h2>
                    <p className={css.text}>
                        {findPropertyValue(property, 'description')}
                    </p>
                </div>

                <h3 className={css.arrow}>
                    <Link
                        className={css.link}
                        to={`/project/${slug}/`}
                    >
                        {"View Project"}
                    </Link>
                </h3>

                <img
                    className={css.imgPair}
                    src={getStaticPath((findPropertyValue(image, 'swiper'))?.[2])}
                    alt="img"
                />
            </div>
        </div>
    );
}

export default DoublePics;
