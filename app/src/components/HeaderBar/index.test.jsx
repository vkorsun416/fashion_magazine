import React from "react";
import {mount} from "enzyme";
import HeaderBar from ".";
import {StaticRouter} from "react-router-dom";
import Wrap from "./Wrap";
import MainLink from "./MainLink";
import MenuBtn from "./MenuBtn";
import {LIGHT} from "../../layout/themes";

globalThis.console.error = jest.fn();

describe("MainHeaderBar bar", function () {
    test("Should render to string", () => {
        const wrap = mount(
            <StaticRouter>
                <HeaderBar />
            </StaticRouter>
        );

        expect(wrap.html()).toMatchSnapshot();
    });

    test("Should receive prop from context", () => {
        const wrap = mount(
            <StaticRouter>
                <HeaderBar />
            </StaticRouter>
        );

        expect(wrap.find(MenuBtn).props().openMenu).toBe(undefined);
    });

    test("Should render with dependencies", () => {
        const wrap = mount(
            <StaticRouter>
                <HeaderBar />
            </StaticRouter>
        );

        expect(wrap.find(Wrap)).toHaveLength(1);
        expect(wrap.find(Wrap).props().children).toHaveLength(2);

        expect(wrap.find(MainLink)).toHaveLength(1);
        expect(wrap.find(MainLink).props().theme).toBe(undefined);

        expect(wrap.find(MenuBtn)).toHaveLength(1);
        expect(wrap.find(MenuBtn).props().theme).toBe(undefined);
    });

    test("Should render with theme", () => {
        const wrap = mount(
            <StaticRouter>
                <HeaderBar
                    theme={LIGHT}
                />
            </StaticRouter>
        );

        expect(wrap.find(MainLink).props().theme).toBe(LIGHT);
        expect(wrap.find(MenuBtn).props().theme).toBe(LIGHT);
        expect(wrap.html()).toMatchSnapshot();
    });

    test("Should render with wrong theme", () => {
        globalThis.console.error.mockClear();

        mount(
            <StaticRouter>
                <HeaderBar
                    theme={"WRONG"}
                />
            </StaticRouter>
        );

        expect(globalThis.console.error).toBeCalledTimes(1);
    });
});

describe("Main link", () => {
    test("Should render on main", () => {
        const wrap = mount(
            <StaticRouter location={"/"}>
                <HeaderBar />
            </StaticRouter>
        );

        expect(wrap.find(MainLink).html()).toMatchSnapshot();
    });

    test("Should render other page", () => {
        const wrap = mount(
            <StaticRouter location={"/page"}>
                <HeaderBar />
            </StaticRouter>
        );

        expect(wrap.find(MainLink).html()).toMatchSnapshot();
    });
});

describe("MenuButton", () => {
    test("Should render with popup", () => {
        const openMenu = jest.fn();

        const wrap = mount(
            <StaticRouter location={"/"}>
                <HeaderBar
                    openMenu={openMenu}
                />
            </StaticRouter>
        );

        wrap.find(".btn").simulate("click");

        expect(openMenu).toBeCalledTimes(1);
    });
});
