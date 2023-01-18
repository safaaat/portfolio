import React from "react";

const ImageAbout = () => {
    return (
        <div className="parent-img-about">
            <div className="border-hover">
                <div className="img-about" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/image/about/profileAbout.png"})` }}></div>
            </div>
        </div>
    )
}

export default ImageAbout