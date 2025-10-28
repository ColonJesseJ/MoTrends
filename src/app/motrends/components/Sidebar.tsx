'use client';

import { MdOutlineDashboard, MdOutlinePeople } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { PiNotePencilBold } from "react-icons/pi";
import { LuLayoutList } from "react-icons/lu";
import { FaUniversity } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa6";
import { useState } from "react";

const Sidebar = () => {
    const [expanded, setExpanded] = useState(false); // expanded state for mouse 
    return (
        <aside
            className={`h-full transition-[width] duration-150 ${expanded ? "w-46" : "w-16"}`}
            onMouseEnter={() => setExpanded(true)} // when enter expand
            onMouseLeave={() => setExpanded(false)} // leave expand
        >
            <nav className="h-full flex flex-col bg-white shadow-sm pl-5 pr-9">
                <div className=" pt-10 pb-2 flex" >
                    <button className=" text-gray-500 text-lg"   >
                        <IoIosArrowBack />
                    </button>
                </div>
                <ul className=" flex flex-col flex-2 gap-5 mt-12">
                    <li className="text-xl text-gray-500" >
                        <MdOutlineDashboard />
                    </li>
                    <li className="text-xl text-gray-500" >
                        <PiNotePencilBold />
                    </li>
                    <li className="text-xl text-gray-500" >
                        <LuLayoutList />
                    </li>
                    <li className="text-xl text-gray-500">
                        <MdOutlinePeople />
                    </li>
                </ul>
                <ul className=" flex flex-col flex-5 gap-5">
                    <li className="text-lg text-gray-500">
                        <FaUniversity />
                    </li>
                    <li className="text-lg text-gray-500">
                        <FaChartBar />
                    </li>
                </ul>


            </nav>


        </aside>
    )
}
export default Sidebar;
