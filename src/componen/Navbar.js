import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome, FaUserAlt, GiBrain, AiTwotoneFolderOpen, RiContactsBook2Fill, BsFillGridFill, AiFillCloseCircle } from '../utils/icon';

const ListButton = ({ buttonToggle }) => {
    // Data List Button And Link
    const data = [
        {
            namaButton: "Home",
            link: "/"
        },
        {
            namaButton: "About",
            link: "/about"
        },
        {
            namaButton: "Skill",
            link: "/skill"
        },
        {
            namaButton: "Portfolio",
            link: "/portfolio"
        },
        {
            namaButton: "Contact",
            link: "/contact"
        }
    ]

    // Icon
    const icon = (value) => {
        if (value === "Home") return <AiFillHome />
        if (value === "About") return <FaUserAlt />
        if (value === "Skill") return <GiBrain />
        if (value === "Portfolio") return <AiTwotoneFolderOpen />
        if (value === "Contact") return <RiContactsBook2Fill />
    }

    return (
        <>
            <ul className="ul-nav">
                {/* Maping Data */}
                {data.map((data, index) => (
                    <li key={index}
                        className="li-nav"
                        onClick={() => buttonToggle(false)}>
                        <NavLink to={data.link} className={({ isActive }) => (isActive ? "button active" : "button")}>
                            <span className="icon">{icon(data.namaButton)}</span>
                            {data.namaButton}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </>
    )
}

const Navbar = ({ sizeActive }) => {
    const [active, setActive] = useState(false);

    const buttonToggle = (value) => {
        if (value === false) return setActive(value);
        return setActive(!active);
    }

    return (
        <>
            <div className="parent-navbar">
                <div className={!sizeActive ? "navbar py-2" : "navbar py-1"}>
                    {/* Icon Navbar */}
                    <h3 className={!sizeActive ? "judul-web text-2xl" : "judul-web text-xl"}>Safaat_Art</h3>
                    {/* List Button Navbar */}
                    <div className="hidden 950:inline-block"><ListButton /></div>
                    {/* Button Toggle */}
                    <div className={!sizeActive ? "toggle text-[1.5rem]" : "toggle text-[1.3rem]"} onClick={() => buttonToggle()}>
                        {!active
                            ? <BsFillGridFill />
                            : <AiFillCloseCircle />
                        }
                    </div>
                </div>
            </div>

            {/* Button Nav Mobile */}
            <div className="w-[90%] mx-auto relative -mt-5">
                {!sizeActive
                    ? (
                        <div className={!active ? "parent-nav-mobile h-[4.1rem] top-[-2.8rem]" : "parent-nav-mobile top-[-2.8rem] parent-nav-mobile-aktif"}>
                            <div className="mt-[6rem] 950:hidden">
                                <ListButton buttonToggle={buttonToggle} />
                            </div>
                        </div>
                    )
                    : (
                        <div className={!active ? "parent-nav-mobile h-[3.5rem] top-[-2.1rem]" : "parent-nav-mobile top-[-2.1rem] parent-nav-mobile-aktif"}>
                            <div className="mt-[6rem] 950:hidden">
                                <ListButton buttonToggle={buttonToggle} />
                            </div>
                        </div>
                    )
                }


            </div>
        </>
    )
}

export default Navbar