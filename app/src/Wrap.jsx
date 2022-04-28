import React from 'react';
import ApiContext from "./context/ApiContext";
import PopupContext from "./context/PopupContext";
import {BrowserRouter} from "react-router-dom";

function Wrap(props) {
    const {children} = props;

    return (
        <ApiContext>
            <PopupContext>
                <BrowserRouter>
                    {children}
                </BrowserRouter>
            </PopupContext>
        </ApiContext>
    );
}

export default Wrap;
