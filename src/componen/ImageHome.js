import React from "react";

const ImageHome = ({ sizeActive }) => {
    return (
        <div className="relative flex justify-center items-center pb-2">
            <img
                src={process.env.PUBLIC_URL + "/assets/image/home/Logo_SA.png"} alt={"Logo-SA"}
                className="img-logo-sa"
            />
            <img
                src={process.env.PUBLIC_URL + "/assets/image/home/background_Logo_SA.png"}
                alt={"Background-SA"}
                className="img-background-sa"
            />
        </div>
    )
}

export default ImageHome