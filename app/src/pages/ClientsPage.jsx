import React from 'react';
import ClientItemList from "../components/ClientItemList";
import {Helmet} from "react-helmet";

function ClientsPage() {
    return(
        <>
            <Helmet>
                <title>Our clients</title>
                <meta name="description" content="Our best clients. Discover their sites." />
            </Helmet>
            <ClientItemList/>
        </>
    )
}

export default ClientsPage;
