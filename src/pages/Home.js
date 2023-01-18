import React from "react";
import TextHome from "../componen/TextHome";
import ImageHome from "../componen/ImageHome";

const Home = ({ sizeActive }) => {
    return (
        <div className={!sizeActive ? "container pt-2 pb-3" : "container-mobile pt-1"}>
            <TextHome sizeActive={sizeActive} />
            <ImageHome sizeActive={sizeActive} />
        </div>
    )
}

export default Home