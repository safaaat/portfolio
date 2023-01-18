import React from "react";
import SocialMedia from "./SocialMedia";

const TextHome = ({ sizeActive }) => {
    return (
        <>
            <div className="flex items-center justify-center relative top-2">
                <div className={!sizeActive
                    ? "border-text-home"
                    : "border-text-home_mobile"
                }>
                    <div className="px-2">
                        <i className="text-color-primary sm:text-sm">Hai, nama saya</i>
                        <h1 className={!sizeActive
                            ? "text-name"
                            : "text-name_mobile"
                        }>Muhammad Safaat</h1>
                        <p className={!sizeActive
                            ? "text-info"
                            : "text-info_mobile"
                        }>Saya lulusan baru, informatika di Universitas Nasional. Saya sangat tertarik dengan pengembangan website, berfukus pada bagian Front End Developer, saya juga bisa menggunakan Software Design.</p>
                    </div>

                    {/* Social Media */}
                    <div className="w-full h-[1px] bg-gray-500 mt-[1.5rem] mb-[1rem] sm:hidden"></div>
                    <div className={!sizeActive
                        ? "parent-icon-texthome"
                        : "parent-icon-texthome_mobile"
                    }>
                        <SocialMedia />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TextHome