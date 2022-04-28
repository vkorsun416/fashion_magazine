import React from 'react';
import ProjectTemplateList from "../components/ProjectTemplateList";
import {Helmet} from "react-helmet";

function ProjectsPage() {
    return (
        <>
            <Helmet>
                <title>
                    All of Projects
                </title>
                <meta name="description" content="See the full list of our projects."/>
            </Helmet>

            <ProjectTemplateList/>
        </>
    );
}

export default ProjectsPage;