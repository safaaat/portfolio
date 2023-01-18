import React from "react";
import SocialMedia from "./SocialMedia";

const TextAbout = () => {
    return (
        <>
            <div className="flex items-center">
                <div className="border-textabout realtive">
                    <p className="px-4 sm:px-0">Hello! Nama saya <i className="text-color-primary font-bold">Muhammad Safaat</i> dan saya sangat menikmati membuat sesuatu yang berhubungan dengan pemrograman khususnya di bidang website. hal yang membuat saya tertarik untuk mendalami bidang Front End adalah pada saat saya mempelajari HTML dan CSS. Aplikasi yang saya buat berfokus pada Front End Developer.</p>
                    <p className="mt-4 px-4 sm:px-0">Aplikasi pertama saya adalah Pemesanan Makanan, yaitu Gel-Coffe. Pengolahan data Gel-Coffe di buat menggunakan Fake Api JSON Placeholder. Oleh karna itu, semua Logika validasi dilakukan di bagian Font End</p>

                    {/* Social Media */}
                    <hr className="border-white/50 sm:hidden my-4" />
                    <div className="parent-socialmedia">
                        <SocialMedia />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TextAbout