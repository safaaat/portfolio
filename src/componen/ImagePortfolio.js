import React from "react";

const ImagePortfolio = ({ sizeActive }) => {
    return (
        <>
            <a href="https://safaaat.github.io/gelcoffe/" target="_blank" rel="noreferrer" className="parent_img-pf">
                <div className="bg-green"></div>
                <div className={!sizeActive
                    ? "img h-[20rem]"
                    : "img h-[16rem]"
                } style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/image/portofolio/gelCoffe.png"})` }}></div>
            </a>
        </>
    )
}

export default ImagePortfolio