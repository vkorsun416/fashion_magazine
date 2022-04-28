import React from 'react';
import context from "./context";

function withApi(Component) {
    return function (props) {
        const current = React.useContext(context);

        return (
            <Component
                {...current}
                {...props}
            />
        );
    }
}

export default withApi;
