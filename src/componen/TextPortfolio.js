import React from "react";
import { FaGithubSquare, BiLinkExternal } from "../utils/icon";

const TextPortfolio = () => {
    return (
        <div className="container-text-port">
            <div>
                <span className="text-color-primary ml-5">Project</span>
                <h1 className="nama-project">Pemesanan Makanan</h1>
                <div className="parent-box">
                    <div className="absolute left-0 top-0 text-[1.5rem] text-gray-400 grid gap-[1.8rem] ml-3 justify-items-center content-center h-full">
                        <a href="https://github.com/safaaat/gelcoffe" target="_blank" rel="noreferrer" className="icon hidden sm:inline"><FaGithubSquare /></a>
                        <a href="https://safaaat.github.io/gelcoffe" target="_blank" rel="noreferrer" className="icon hidden sm:inline"><BiLinkExternal /></a>
                    </div>
                    <p className="text-sm text-justify 375:text-start 414:text-[.9rem] 500:text-base">Gel-Coffe adalah website pemesanan makanan dan minuman. Website ini di buat menggunakan teknologi React-Js dan Tallwind-css. dalam pengolahan data, website ini mengunakan Rest Api, yaitu Fake Api JSON Server. Semua Logika validasi di lakukan di bagian Front End.</p>
                </div>
                <div className="ml-5 text-gray-400">
                    <div className="flex items-center 375:mt-2  sm:mt-3 gap-3 cursor-default md:absolute z-10 text-xs 500:text-sm md:backdrop-blur-lg xl:backdrop-blur-none md:w-[190%] 811:w-[170%] 1024:w-[120%] 1160:w-full">
                        <p>React Js</p>
                        <span>|</span>
                        <p>Taillwind Css</p>
                        <span>|</span>
                        <p>Fake Api JSON Server</p>
                    </div>
                    <div className="mt-[1rem] gap-[1.5rem] sm:mt-2 flex text-[1.5rem] sm:gap-3 sm:hidden">
                        <a href="https://github.com/safaaat/gelcoffe" target="_blank" rel="noreferrer" className="icon">
                            <FaGithubSquare />
                        </a>
                        <a href="https://safaaat.github.io/gelcoffe" target="_blank" rel="noreferrer" className="icon">
                            <BiLinkExternal />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextPortfolio