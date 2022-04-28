import React from 'react';
import css from './RightPicLeftNum.module.css';
import {Link} from "react-router-dom";
import findPropertyValue from "../../service/findPropertyValue";
import getStaticPath from "../../service/getStaticPath";

function RightPicLeftNum(props) {
    const {
        item: {
            slug,
            property,
            image,
        },
        index
    } = props;

    return (
        <div className={css.section}>
            <div className={css.container}>
                <div className={css.grid}>
                    <h3 className={css.num}>
                        {String(index + 1).padStart(2, "0")}
                    </h3>
                    <div className={css.wrap}>
                        <h3 className={css.subtitle}>
                            {findPropertyValue(property, 'brand')}
                        </h3>

                        <h2 className={css.title}>
                            {findPropertyValue(property, 'title')}
                        </h2>

                        <p className={css.text}>
                            {findPropertyValue(property, 'description')}
                        </p>

                        <h3 className={css.arrow}>
                            <Link
                                className={css.link}
                                to={`/project/${slug}/`}
                            >
                                {"View Project"}
                            </Link>
                        </h3>
                    </div>
                    <img className={css.img}
                         src={getStaticPath(findPropertyValue(image, 'main'))}
                         alt="img"
                    />
                </div>
            </div>
        </div>
    );
}

export default RightPicLeftNum;