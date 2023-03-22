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
            <div className="relative grid w-[95%] md:w-full mx-auto md:grid-cols-[30%_70%] lg:grid-cols-[35%_65%] xl:grid-cols-[40%_60%] mt-[3rem]">
                <TextPortfolio filterData={filterData} />
                <ImagePortfolio sizeActive={sizeActive} filterData={filterData} />
            </div>
            <div>
                <ButtonPagination currentPgition={currentPgition} setCurrentPgition={setCurrentPgition} />
            </div>
        </>
    )
}

export default Portfolio