import React from 'react';
import ContactForm from "../components/ContactForm";
import {Helmet} from "react-helmet";

function ContactPage() {

    return (
        <div>
            <Helmet>
                <title>Contacts</title>
                <meta name="description" content="Leave your feedback."/>
            </Helmet>
            <ContactForm/>
        </div>
    );
}

export default ContactPage;
