import React from "react";
import context from "./context";

export function withScroll(Component) {
    return function (props) {
        const current = React.useContext(context);

        return (
            <Component
                {...current}
                {...props}
            />
        )
    }
}
