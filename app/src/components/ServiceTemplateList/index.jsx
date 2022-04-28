import React from "react";
import Wrap from "./Wrap";
import Template from "./Template";
import {withApi} from "../../context/ApiContext";
import imgService from "./imgService.png";

function ServiceTemplateList(props) {
    const {service, getService} = props;
    React.useEffect(getService, [getService]);

    return (
        <Wrap
            image={imgService}
            name="Services"
        >
            {service.map((item, index) => (
                <Template
                    item={item}
                    index={index}
                    key={index}
                />
            ))}
        </Wrap>
    );
}

export default withApi(ServiceTemplateList);