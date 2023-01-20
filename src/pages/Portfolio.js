import React from "react";
import TextPortfolio from "../componen/TextPortfolio";
import ImagePortfolio from "../componen/ImagePortfolio";

const Portfolio = ({ sizeActive }) => {
    return (
        <>
            <div className="relative grid w-[95%] md:w-full mx-auto md:grid-cols-[30%_70%] lg:grid-cols-[35%_65%] xl:grid-cols-[40%_60%] mt-[4.7rem] mb-[3.2rem]">
                <TextPortfolio />
                <ImagePortfolio sizeActive={sizeActive} />
            </div>
        </>
    )
}

export default Portfolio