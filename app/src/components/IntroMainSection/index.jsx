import React from 'react';
import Description from "./Description";
import Wrap from "./Wrap";
import data from "./data";
import Arrow from "./Arrow";
import Image from "./Image";

function IntroMainSection(props) {
    const {title, text, red, grey} = props;

    return (
        <Wrap>
            <Image
                image={red}
                color={red}
            />

            <Description
                title={title}
                text={text}
            />

            <Arrow/>

            <Image image={grey} />
        </Wrap>
    );
}

IntroMainSection.defaultProps = data;

export default IntroMainSection;
