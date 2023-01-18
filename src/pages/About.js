import React from "react";
import ImageAbout from "../componen/ImageAbout";
import TextAbout from "../componen/TextAbout";

const About = ({ sizeActive }) => {
    return (
        <div className={!sizeActive ? "container-about" : "container-about_mobile"}>
            <ImageAbout />
            <TextAbout />
        </div>
    )
}

export default About