import React from 'react';
import Item from "./Item";
import {withApi} from "../../context/ApiContext";
import Wrap from "./Wrap";

function ClientItemList(props) {
    const {client, getClient} = props;

    React.useEffect(getClient, [getClient]);

    return (
        <Wrap>
            {client.map((item, index) => (
                <Item
                    item={item}
                    index={index}
                    key={index}
                />
            ))}
        </Wrap>
    );
}

export {ClientItemList};

export default withApi(ClientItemList);
