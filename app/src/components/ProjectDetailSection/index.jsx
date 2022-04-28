import React from "react";
import Wrap from "./Wrap";
import Description from "./Description";

function ProjectDetailSection(props) {
    const {title, text, brand} = props;

    return (
        <Wrap>
            <Description
                title={title}
                text={text}
                brand={brand}
            />
        </Wrap>
    );
}

export default ProjectDetailSection;