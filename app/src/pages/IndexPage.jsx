import React from 'react';
import ImageFullScreen from "../components/ImageFullScreen";
import IntroMainSection from "../components/IntroMainSection";
import {withApi} from "../context/ApiContext";
import ProjectReview from "../components/ProjectReview";
import projects from "./mock/project.main";
import {Helmet} from "react-helmet";

function IndexPage(props) {
    const {onMain, getOnMain, imgHead} = props;

    React.useEffect(getOnMain, [getOnMain]);

    return (
        <div>
            <Helmet>
                <title>Fashion shop</title>
                <meta name="description" content="Fashion Shop with many of projects" />
            </Helmet>
            <ImageFullScreen img={imgHead}/>

            <IntroMainSection/>

            {onMain.map((item, index) => (
                <ProjectReview
                    item={item}
                    key={index}
                    index={index}
                    theme={projects[index]}
                />
            ))}
        </div>
    );
}

IndexPage.defaultProps = {
    imgHead: require("./mock/image.main").default,
};

export default withApi(IndexPage);
