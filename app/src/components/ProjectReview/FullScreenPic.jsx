import React from 'react';
import css from './FullScreenPic.module.css';
import {Link} from "react-router-dom";
import getStaticPath from "../../service/getStaticPath";
import findPropertyValue from "../../service/findPropertyValue";

function FullScreenPic(props) {
    const {
        item: {
            slug,
            property,
            image,
        },
        index
    } = props;

    return (
        <section className={css.section}
                 style={{backgroundImage: `url(${getStaticPath(findPropertyValue(image, 'main'))})`}}>
            <div className={css.container}>
                <div className={css.grid}>
                    <div className={css.wrap}>
                        <h3 className={css.num}>
                            {String(index + 1).padStart(2, "0")}
                        </h3>

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
                    <div className={css.btnPause}>
                        <a className={css.btnItem}
                           href="/"
                        >
                            Pause
                        </a> /
                        <a className={css.btnItem}
                           href="/"
                        >
                            Mute
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FullScreenPic;