import React from 'react';
import Description from "./Description";
import Wrap from "./Wrap";
import data from "./data";
import Arrow from "./Arrow";
import Image from "./Image";

function AboutSection(props) {
    const {title, text, imgLeft, imgRight, arrow} = props;

    return (
        <Wrap>
            <Image
                image={imgLeft}
                position="left"
            />
            <Description
                title={title}
                text={text}
            />
            <Arrow text={arrow}/>

            <Image image={imgRight}/>
        </Wrap>
    );
}

AboutSection.defaultProps = data;

export default AboutSection;