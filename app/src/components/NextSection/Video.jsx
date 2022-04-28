import React from 'react';
import css from "./Video.module.css";
import {Link} from "react-router-dom";
import getStaticPath from "../../service/getStaticPath";

function Video(props) {
    const {video, slug} = props;

    return (
        <>
            <div className={css.wrap}>
                <img
                    className={css.video}
                    src={getStaticPath(video)}
                    alt="img"
                />
                <div className={css.title}>
                    {slug}
                </div>
            </div>
            <div className={css.details}>
                <div className={css.link}>
                    <button
                        className={css.item + " " + css.after}
                    >
                        Play
                    </button>

                    <button
                        className={css.item}
                    >
                        Pause
                    </button>
                </div>

                <Link
                    className={css.link}
                    to="#"
                    target="_blank"
                >
                    <div className={css.item}>
                        Enter Full Screen
                    </div>
                </Link>
            </div>
        </>
    );
}

export default Video;