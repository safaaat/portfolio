import { React, useCallback, useEffect, useState } from "react";
import TextPortfolio from "../componen/TextPortfolio";
import ImagePortfolio from "../componen/ImagePortfolio"
import ButtonPagination from "../componen/ButtonPagination";
import dataPortfolio from "../utils/data";

const Portfolio = ({ sizeActive }) => {
    const [currentPgition, setCurrentPgition] = useState(1);
    const [filterData, setFilterData] = useState([]);

    const updateFilter = useCallback(() => {
        let hasil = dataPortfolio.filter((data) => {
            return data.id === currentPgition
        })
        return setFilterData(hasil)
    }, [currentPgition])

    useEffect(() => {
        updateFilter()
    }, [updateFilter])

    return (
        <>
            {/* Size Handphone */}
            <div className="inline-block sm:hidden">
                {filterData.map((data, index) => (
                    <div
                        key={index}
                        className={`relative grid grid-cols-1 w-[95%] h-auto md:w-full mx-auto md:grid-cols-[30%_70%] lg:grid-cols-[35%_65%] xl:grid-cols-[40%_60%] mt-[3rem] bg-cover bg-center`}
                        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + `/assets/image/portofolio/${data.image}`})` }}
                    >
                        <TextPortfolio filterData={filterData} />
                    </div>
                ))}
            </div>
            {/* Size Tablet And Pc */}
            <div className="hidden sm:inline">
                <div
                    className={`relative grid w-[95%] h-auto md:w-full mx-auto md:grid-cols-[30%_70%] lg:grid-cols-[35%_65%] xl:grid-cols-[40%_60%] mt-[3rem] bg-cover bg-center`}
                >
                    <TextPortfolio sizeActive={sizeActive} filterData={filterData} />
                    <ImagePortfolio sizeActive={sizeActive} filterData={filterData} />
                </div>
            </div>

            <div>
                <ButtonPagination currentPgition={currentPgition} setCurrentPgition={setCurrentPgition} />
            </div>
        </>
    )
}

export default Portfolio