import React from 'react';
import {Link} from "react-router-dom";
import css from "./Template.module.css";
import getStaticPath from "../../service/getStaticPath";
import findPropertyValue from "../../service/findPropertyValue";

function Template(props) {
    const {
        item: {
            slug,
            property,
            image,
        },
        index
    } = props;

    return (
        <div
            className={css.section}
            style={{backgroundImage: `url(${getStaticPath(findPropertyValue(image, 'main'))})`}}
        >
            <div className={css.container}>
                <div className={css.grid}>
                    <h1 className={css.title}>
                        {findPropertyValue(property, 'title')}
                    </h1>

                    <div className={css.number}>
                        <div>
                            {"(" + (String(index + 1)).padStart(2, "0") + ")"}
                        </div>

                        <div>
                            {findPropertyValue(property, 'brand')}
                        </div>
                    </div>

                    <p className={css.text}>
                        {findPropertyValue(property, 'description')}
                    </p>

                    <h3 className={css.arrow}>
                        <Link
                            to={`/project/${slug}/`}
                            className={css.link}
                        >
                            View Project
                        </Link>
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default Template;