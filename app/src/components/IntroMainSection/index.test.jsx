import {mount} from "enzyme";
import IntroMainSection from ".";
import Description from "./Description";
import Wrap from "./Wrap";

describe("Intro main section", function () {
    test("Should ", () => {
        const wrap = mount(
            <IntroMainSection
                text={"SOME_TEXT"}
                title={"SOME_TITLE"}
            />
        );
        
        expect(wrap.find(Description).props().text).toBe("SOME_TEXT");
        expect(wrap.find(Description).props().title).toBe("SOME_TITLE");
        expect(wrap.find(Wrap).length).toBe(1);
    });
});
