import { FaGithubSquare, BiLinkExternal } from "../utils/icon";
import { React } from "react";

const Teknologi = (value) => {
    return (
        <>
            {value.map((data, index) => (
                <div key={index}>
                    <p>{data}</p>
                </div>
            ))}
        </>
    )
}

const TextPortfolio = ({ filterData, sizeActive }) => {

    return (
        <div
            className={!sizeActive
                ? "container-text-port relative"
                : "container-text-port absolute"
            }
        >
            {filterData.map((data) => (
                <div key={data.id}>
                    <span className="text-color-primary ml-5">Project</span>
                    <h1 className="nama-project">{data.judul}</h1>
                    <div className="parent-box">
                        <div className="absolute left-0 top-0 text-[1.5rem] text-gray-400 grid gap-[1.8rem] ml-3 justify-items-center content-center h-full">
                            <a href={data.linkGithub} target="_blank" rel="noreferrer" className="icon hidden sm:inline"><FaGithubSquare /></a>
                            <a href={data.linkWebsite} target="_blank" rel="noreferrer" className="icon hidden sm:inline"><BiLinkExternal /></a>
                        </div>
                        <p className="text-sm text-justify 375:text-start 414:text-[.9rem] 500:text-base">{data.keterangan}</p>
                    </div>
                    <div className="ml-5 text-gray-400">
                        <div className="flex items-center flex-wrap 375:mt-2  sm:mt-3 gap-2 cursor-default md:relative z-10 text-xs 500:text-sm md:backdrop-blur-lg xl:backdrop-blur-none md:w-[190%] 811:w-[170%] 1024:w-[120%] 1160:w-full">
                            {Teknologi(data.teknologi)}
                        </div>
                        <div className="mt-[1rem] gap-[1.5rem] sm:mt-2 flex text-[1.5rem] sm:gap-3 sm:hidden">
                            <a href={data.linkGithub} target="_blank" rel="noreferrer" className="icon">
                                <FaGithubSquare />
                            </a>
                            <a href={data.linkWebsite} target="_blank" rel="noreferrer" className="icon">
                                <BiLinkExternal />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TextPortfolio