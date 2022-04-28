import React from "react";
import {mount} from "enzyme";
import {StaticRouter} from "react-router-dom";
import Wrap from "./Wrap";
import Social from "./Social";
import {DARK} from "../../layout/themes";
import Footer from ".";

globalThis.console.error = jest.fn();

describe("Footer", () => {
    test("Should render to string", () => {
        const wrap = mount(
            <StaticRouter>
                <Footer />
            </StaticRouter>
        );

        expect(wrap.html()).toMatchSnapshot();
    });

    test("Should render with dependencies", () => {
        const wrap = mount(
            <StaticRouter>
                <Footer />
            </StaticRouter>
        );

        console.log(wrap.find(Wrap).html())

        expect(wrap.find(Wrap)).toHaveLength(1);
        expect(wrap.find(Social)).toHaveLength(1);
        expect(wrap.find(Social).props().theme).toBe(undefined);
    });

    test("Should render with theme", () => {
        const wrap = mount(
            <StaticRouter>
                <Footer theme={DARK}/>
            </StaticRouter>
        );

        expect(wrap.find(Wrap).props().theme).toBe(DARK);
        expect(wrap.find(Social).props().theme).toBe(DARK);
    });

    test("Should not render with wrong theme", () => {
        mount(
            <StaticRouter>
                <Footer theme={"WRONG"}/>
            </StaticRouter>
        );

        expect(globalThis.console.error).toBeCalledTimes(1);
    });

});

