import React from 'react';
import AboutSection from "../components/AboutSection";
import ServiceTemplateList from "../components/ServiceTemplateList";
import ContactForm from "../components/ContactForm";
import {Helmet} from "react-helmet";

function AboutProjects() {
    return (
        <div>
            <Helmet>
                <title>About projects</title>
                <meta name="description" content="Details of our projects." />
            </Helmet>
            <AboutSection/>
            <ServiceTemplateList/>
            <ContactForm/>
        </div>
    );
}

export default AboutProjects;