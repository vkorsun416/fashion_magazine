import React from "react";
import Template from "./Template";
import {withApi} from "../../context/ApiContext";

function ProjectTemplateList(props) {
    const {project, getProject} = props;

    React.useEffect(getProject, [getProject]);

    return (
        <div>
            {project.map((item, index) => (
                <Template
                    item={item}
                    index={index}
                    key={index}
                />
            ))}
        </div>
    );
}

export {ProjectTemplateList}

export default withApi(ProjectTemplateList);