"use client";
import React, { useContext } from "react";
// import SelectGreeting from "@/component/ui/SelectGreeting";

const Header = () => {
  return (
    <div className="bg-black p-5 flex flex-col md:flex-row md:space-x-5 items-start">
        <h1 className="text-white font-bold text-lg md:text-2xl ">Online Greeting Cards</h1>

    </div>
  );
};

export default Header;