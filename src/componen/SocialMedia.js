import React from "react"
import { TiSocialInstagram, GrLinkedin, FaGithubSquare, BsWhatsapp } from "../utils/icon";

const SocialMedia = () => {
    return (
        <>
            <a href="https://www.instagram.com/safaat_art" target="_blank" rel="noreferrer">
                <TiSocialInstagram className="text-[1.6rem] icon-button" />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-safaat-997a16246/" target="_blank" rel="noreferrer">
                <GrLinkedin className="text-[1.3rem] icon-button" />
            </a>
            <a href="https://github.com/safaaat" target="_blank" rel="noreferrer">
                <FaGithubSquare className="text-[1.4rem] icon-button" />
            </a>
            <a href="https://bit.ly/3xBaT21" target="_blank" rel="noreferrer">
                <BsWhatsapp className="text-[1.3rem] icon-button" />
            </a>
        </>
    )
}

export default SocialMedia