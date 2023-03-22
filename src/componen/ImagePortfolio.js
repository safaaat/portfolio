import React from "react";

const ImagePortfolio = ({ sizeActive, filterData }) => {
    return (
        <>
            {filterData.map((data, index) => (
                <div key={index}>
                    <a href={data.linkWebsite} target="_blank" rel="noreferrer" className="parent_img-pf">
                        <div className="bg-green"></div>
                        <div

                            className={!sizeActive
                                ? "img h-full"
                                : "img h-[16rem]"
                            }
                            style={{ backgroundImage: `url(${process.env.PUBLIC_URL + `/assets/image/portofolio/${data.image}`})` }}></div>
                    </a>
                </div >
            ))}
        </>
    )
}

export default ImagePortfolio