import React, { useCallback, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { About, Contact, Home, Portfolio, Skill } from "./pages/index";
import Navbar from "./componen/Navbar";

const App = () => {
  const [active, setActive] = useState(false);

  const checkDimensi = useCallback(() => {
    if (window.innerHeight >= 272 && window.innerHeight <= 414) return setActive(true);
    return setActive(false);
  }, [])

  useEffect(() => {
    checkDimensi()
    window.addEventListener("resize", checkDimensi);
    return () => window.removeEventListener("resize", checkDimensi);
  }, [checkDimensi])

  return (
    <>
      <div className={!active ? "container-border-box md:h-screen" : "container-border-box"}>
        <div className={!active ? "border-box w-[90%] 500:w-[80%] shadow-white shadow-[0px_5px_13px_0px] sm:shadow-[0px_7px_30px_0px]" : "border-box w-[90%] 500:w-[80%] shadow-white shadow-[0px_5px_13px_0px]"}>
          <Navbar sizeActive={active} />
          <Routes>
            <Route path="/" element={<Home sizeActive={active} />} />
            <Route path="about" element={<About sizeActive={active} />} />
            <Route path="portfolio" element={<Portfolio sizeActive={active} />} />
            <Route path="skill" element={<Skill sizeActive={active} />} />
            <Route path="contact" element={<Contact sizeActive={active} />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App