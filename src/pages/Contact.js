import React from "react";
import { TiSocialInstagram, GrLinkedin, FaGithubSquare, BsWhatsapp } from "../utils/icon";

const Contact = ({ sizeActive }) => {

    return (
        <>
            <div className={!sizeActive ? "container-contact gap-[1rem] sm:gap-[5rem]" : "container-contact gap-[1rem]"}>
                {/* --------------- Instagram --------------- */}
                <a href="https://www.instagram.com/safaat_art" target="_blank" rel="noreferrer"
                    className={!sizeActive
                        ? "parent-icon group w-[6rem] h-[6rem] 500:w-[8rem] 500:h-[8rem]"
                        : "parent-icon group w-[6rem] h-[6rem]"
                    }>
                    {/* Icon */}
                    <TiSocialInstagram className={!sizeActive ? "text-[3rem] 500:text-[4.7rem] transition-all duration-300" : "text-[3.7rem] transition-all duration-300"} />
                    {/* Text */}
                    <p className={!sizeActive
                        ? "text-icon 500:text-2xl"
                        : "text-icon"
                    } >instagram</p>
                </a>
                {/* --------------- Linkedin --------------- */}
                <a href="https://www.linkedin.com/in/muhammad-safaat-997a16246/" target="_blank" rel="noreferrer"
                    className={!sizeActive
                        ? "parent-icon group w-[6rem] h-[6rem] 500:w-[8rem] 500:h-[8rem]"
                        : "parent-icon group w-[6rem] h-[6rem]"
                    }>
                    {/* Icon */}
                    <GrLinkedin className={!sizeActive ? "text-[2.3rem] 500:text-[3.5rem]" : "text-[3rem]"} />
                    {/* Text */}
                    <p className={!sizeActive
                        ? "text-icon relative top-2 500:text-2xl"
                        : "text-icon relative top-2"
                    } >linkedin</p>
                </a>
                {/* --------------- Github --------------- */}
                <a href="https://github.com/safaaat" target="_blank" rel="noreferrer"
                    className={!sizeActive
                        ? "parent-icon group w-[6rem] h-[6rem] 500:w-[8rem] 500:h-[8rem]"
                        : "parent-icon group w-[6rem] h-[6rem]"
                    }>
                    {/* Icon */}
                    <FaGithubSquare className={!sizeActive ? "text-[2.6rem] 500:text-[4rem]" : "text-[3.3rem]"} />
                    {/* Text */}
                    <p className={!sizeActive
                        ? "text-icon relative top-2 500:text-2xl"
                        : "text-icon relative top-2"
                    } >github</p>
                </a >
                {/* --------------- Whatsapp --------------- */}
                <a href="https://bit.ly/3xBaT21" target="_blank" rel="noreferrer"
                    className={!sizeActive
                        ? "parent-icon group w-[6rem] h-[6rem] 500:w-[8rem] 500:h-[8rem]"
                        : "parent-icon group w-[6rem] h-[6rem]"
                    }>
                    {/* Icon */}
                    <BsWhatsapp className={!sizeActive ? "text-[2.3rem] 500:text-[3.7rem]" : "text-[3rem]"} />
                    {/* Text */}
                    <p className={!sizeActive
                        ? "text-icon relative top-2 500:text-2xl"
                        : "text-icon relative top-2"
                    }>whatsapp</p>
                </a>
            </div >
        </>
    )
}

export default Contact