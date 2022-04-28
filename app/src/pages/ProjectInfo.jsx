import React from 'react';
import ImageFullScreen from "../components/ImageFullScreen";
import ProjectDetailSection from "../components/ProjectDetailSection";
import NextSection from "../components/NextSection";
import getStaticPath from "../service/getStaticPath";
import findPropertyValue from "../service/findPropertyValue";
import {withApi} from "../context/ApiContext";
import SwiperSection from "../components/SwiperSection";
import Preloader from "../preloader";
import {Helmet} from "react-helmet";

function ProjectInfo(props) {
    const {info, getInfo, id} = props;
    React.useEffect(() => getInfo(id));

    if (info?.length === 1) {
        const {
            slug,
            property,
            image,
        } = info[0];

        return (
            <div>
                <Helmet>
                    <title>
                        Projects | {slug} |
                    </title>
                    <meta name="description" content="See our partners in these projects."/>
                </Helmet>

                <ImageFullScreen img={getStaticPath(findPropertyValue(image, 'main'))}/>
                <ProjectDetailSection
                    title={findPropertyValue(property, 'title')}
                    text={findPropertyValue(property, 'description')}
                    brand={findPropertyValue(property, 'brand')}
                />
                {/*<SwiperSection images={findPropertyValue(image, 'swiper')}/>*/}
                <NextSection
                    video={findPropertyValue(image, 'video')}
                    slug={slug}
                />
            </div>
        );
    } else return (
        <Preloader/>
    );
}

export default withApi(ProjectInfo);
