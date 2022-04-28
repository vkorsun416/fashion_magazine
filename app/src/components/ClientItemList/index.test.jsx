import React from "react";
import {mount} from "enzyme";
import {ClientItemList} from "./index";
import Item from "./Item";

describe("Client list", function () {
    test("Should render", () => {
        const getClient = jest.fn();

        const wrap = mount(
            <ClientItemList
                client={[]}
                getClient={getClient}
            />
        );

        expect(getClient).toBeCalledTimes(1);
    });

    test("Should render items", () => {
        const getClient = jest.fn();

        const wrap = mount(
            <ClientItemList
                client={Array(10).fill({slug: "123", property: []})}
                getClient={getClient}
            />
        );

        expect(wrap.find(Item)).toHaveLength(10);
    });
});
