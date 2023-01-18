import React from "react";
import { SiJavascript, AiFillHtml5, FaCss3Alt, FaReact, SiTailwindcss, SiAdobephotoshop } from "../utils/icon";

const Skill = ({ sizeActive }) => {

    return (
        <>
            <div className={!sizeActive ? "500:pb-[1rem] 1200:py-[5.5rem] mx-[1rem]" : "mx-[1rem] mt-1 py-[2rem] mb-2"}>
                <div className="w-full flex justify-center">
                    <h2 className={!sizeActive ? "judul-skill mt-[2rem]" : "judul-skill mt-[1rem]"}>bisa menggunakan</h2>
                </div>
                <div className={!sizeActive ? "flex flex-wrap justify-center mt-[2rem] sm:mt-[3rem] mb-[1rem] gap-[2rem] items-center" : "flex flex-wrap justify-center mt-[3rem] mb-[1rem] gap-[1rem] items-center"}>
                    <div className={!sizeActive ? "parent-icon w-[6rem] h-[6rem] 500:w-[8rem] 500:h-[8rem] group" : "parent-icon size-box-skill group"}>
                        <AiFillHtml5 className={!sizeActive ? "text-[4rem] 500:text-[4.5rem]" : "text-[3rem]"} />
                        <p className="text-icon cursor-default">html</p>
                    </div>
                    <div className={!sizeActive ? "parent-icon w-[6rem] h-[6rem] 500:w-[8rem] 500:h-[8rem] group" : "parent-icon size-box-skill group"}>
                        <FaCss3Alt className={!sizeActive ? "text-[4rem] 500:text-[4.5rem]" : "text-[3rem]"} />
                        <p className={!sizeActive ? "text-icon cursor-default 500:text-2xl" : "text-icon cursor-default"}>css</p>
                    </div>
                    <div className={!sizeActive ? "parent-icon w-[6rem] h-[6rem] 500:w-[8rem] 500:h-[8rem] group" : "parent-icon size-box-skill group"}>
                        <SiJavascript className={!sizeActive ? "text-[3.5rem] 500:text-[4rem]" : "text-[2.8rem]"} />
                        <p className={!sizeActive ? "text-icon relative top-1 cursor-default 500:text-2xl" : "text-icon relative top-1 cursor-default"}>Javascript</p>
                    </div>
                    <div className={!sizeActive ? "parent-icon w-[6rem] h-[6rem] 500:w-[8rem] 500:h-[8rem] group" : "parent-icon size-box-skill group"}>
                        <FaReact className={!sizeActive ? "text-[4rem] 500:text-[4.5rem]" : "text-[3rem]"} />
                        <p className={!sizeActive ? "text-icon cursor-default 500:text-2xl" : "text-icon cursor-default"}>react js</p>
                    </div>
                    <div className={!sizeActive ? "parent-icon w-[6rem] h-[6rem] 500:w-[8rem] 500:h-[8rem] group" : "parent-icon size-box-skill group"}>
                        <SiTailwindcss className={!sizeActive ? "text-[4rem] 500:text-[4.5rem]" : "text-[3.5rem]"} />
                        <p className={!sizeActive ? "text-icon cursor-default 500:text-2xl" : "text-icon cursor-default"}>tailwind</p>
                    </div>
                    <div className={!sizeActive ? "parent-icon w-[6rem] h-[6rem] 500:w-[8rem] 500:h-[8rem] group" : "parent-icon size-box-skill group"}>
                        <SiAdobephotoshop className={!sizeActive ? "text-[3.5rem] 500:text-[4rem]" : "text-[3rem]"} />
                        <p className={!sizeActive ? "text-icon relative top-1 cursor-default 500:text-2xl" : "text-icon relative top-1 cursor-default"}>photoshop</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skill