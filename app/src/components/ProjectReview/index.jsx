import React from 'react';
import RightPicLeftNum from "./RightPicLeftNum";
import FullScreenPic from "./FullScreenPic";
import RightPicUpNum from "./RightPicUpNum";
import DoublePics from "./DoublePics";

ProjectReview.RightPicLeftNum = "RightPicLeftNum";
ProjectReview.FullScreenPic = "FullScreenPic";
ProjectReview.RightPicUpNum = "RightPicUpNum";
ProjectReview.DoublePics = "DoublePics";

const config = {
    [ProjectReview.RightPicLeftNum]: (item, index) => (
        <RightPicLeftNum item={item} index={index}/>
    ),
    [ProjectReview.FullScreenPic]: (item, index) => (
        <FullScreenPic item={item} index={index}/>
    ),
    [ProjectReview.RightPicUpNum]: (item, index) => (
        <RightPicUpNum item={item} index={index}/>
    ),
    [ProjectReview.DoublePics]: (item, index) => (
        <DoublePics item={item} index={index}/>
    ),
}

function ProjectReview(props) {
    const {theme, item, index} = props;

    return config[theme]?.(item, index) ?? null;
}

export default ProjectReview;
