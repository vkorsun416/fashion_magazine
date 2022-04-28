import React from "react";
import Wrap from "./Wrap";
import Arrow from "./Arrow";
import Video from "./Video";

function NextSection(props) {
    const {video, slug} = props;

    return (
        <Wrap>
            <Video
                video={video}
                slug={slug}
            />

            <Arrow text="Next Project"/>
        </Wrap>
    );
}

export default NextSection;