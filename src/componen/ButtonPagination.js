import { React, useCallback, useEffect, useState } from "react";
import dataPortfolio from "../utils/data";

const ButtonPagination = ({ setCurrentPgition, currentPgition }) => {
    const [displayNumber, setDisplayNumber] = useState([]);
    const [maxMin, setMaxMin] = useState({ max: 0, min: 0 });
    const data = dataPortfolio

    const updateMaxMin = (value) => {
        setMaxMin((prev) => {
            return { ...prev, ...value }
        })
    }

    const loppingDisplayPgition = useCallback(() => {
        let data = []
        for (let i = maxMin.min; i <= maxMin.max; i++) {
            data.push(i);
        }
        return setDisplayNumber(data)
    }, [maxMin.min, maxMin.max])

    const faMaxMin = useCallback(() => {
        if (data.length <= 3) {
            updateMaxMin({ max: data.length });
            return updateMaxMin({ min: 1 });
        }
        if (currentPgition <= 2) {
            updateMaxMin({ max: 3 });
            return updateMaxMin({ min: 1 });
        }
        if (currentPgition >= 3 && currentPgition < data.length) {
            updateMaxMin({ max: currentPgition + 1 });
            return updateMaxMin({ min: currentPgition - 1 });
        }
    }, [currentPgition, data.length])

    useEffect(() => {
        faMaxMin()
        loppingDisplayPgition()
    }, [loppingDisplayPgition, faMaxMin])

    return (
        <>
            <div className="flex gap-4 justify-center my-4">
                {displayNumber.map((data, index) => (
                    <div
                        key={index}
                        className={currentPgition === data ? "number_pagination-active" : "number_pagination"}
                        onClick={() => setCurrentPgition(data)}
                    >
                        <span>{data}</span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ButtonPagination