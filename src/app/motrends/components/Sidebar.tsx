'use client';

import { MdOutlineDashboard, MdOutlinePeople } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { PiNotePencilBold } from "react-icons/pi";
import { LuLayoutList } from "react-icons/lu";
import { FaUniversity } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa6";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar: React.FC = () => {
    const pathname = usePathname();
    const onPath = (path: string) => pathname === path;
    const [expanded, setExpanded] = useState(false); // expanded state for mouse 
    return (
        <aside
            className={`h-full transition-[width] bg-white shadow-sm ease-in-out duration-250 ${expanded ? "w-52" : "w-20"}`}
            onMouseEnter={() => setExpanded(true)} // when enter expand
            onMouseLeave={() => setExpanded(false)} // leave expand
        >
            <nav className="h-full flex flex-col p-2">
                <Link
                    href="/"
                    className={`mt-6 mb-6 flex items-center justify-start h-8 ${expanded ? "w-44" : "w-10"
                        } gap-5 rounded-2xl pl-2 `}
                >
                    <IoIosArrowBack className="text-2xl shrink-0" />
                    {expanded && (
                        <span
                            className={`text-base font-semibold text-gray-700 "}`}
                        >
                            Back
                        </span>
                    )}
                </Link>

                {expanded && <span className="text-sm text-gray-500 font-mono pl-3 transition-[width] duration-200">
                    MOTRENDS
                </span>}
                <ul className={`flex flex-col flex-[2] gap-4 ${expanded ? "mt-0" : "mt-5"}`}
                >
                    {/* DASHBOARD */}
                    <Link
                        href="/motrends"
                        className={`mt-2 flex items-center justify-start h-8 ${expanded ? "w-44" : "w-10"
                            } gap-5 rounded-2xl ${onPath("/motrends")
                                ? "bg-blue-100 text-blue-500 pl-2"
                                : "text-gray-500 pl-2"
                            }`}
                    >
                        <MdOutlineDashboard className="text-2xl shrink-0" />
                        {expanded && (
                            <span
                                className={`text-base font-bold ${onPath("/motrends") ? "text-blue-500" : "text-gray-700"
                                    }`}
                            >
                                Dashboard
                            </span>
                        )}
                    </Link>

                    {/* CREATE */}
                    <Link
                        href="/motrends/create"
                        className={`flex items-center justify-start h-8 ${expanded ? "w-44" : "w-10"
                            } gap-5 rounded-2xl ${onPath("/motrends/create")
                                ? "bg-blue-100 text-blue-500 pl-2"
                                : "text-gray-500 pl-2"
                            }`}
                    >
                        <PiNotePencilBold className="text-2xl shrink-0" />
                        {expanded && (
                            <span
                                className={`text-base font-bold transition-[width] duration-300 ease-in-out 
                                ${onPath("/motrends/create") ? "text-blue-500" : "text-gray-700"}`}
                            >
                                Create
                            </span>
                        )}
                    </Link>

                    {/* VIEW */}
                    <Link
                        href="/motrends/view"
                        className={`flex items-center justify-start h-8 ${expanded ? "w-44" : "w-10"
                            } gap-5 rounded-2xl ${onPath("/motrends/view")
                                ? "bg-blue-100 text-blue-500 pl-2"
                                : "text-gray-500 pl-2"
                            }`}
                    >
                        <LuLayoutList className="text-2xl shrink-0" />
                        {expanded && (
                            <span
                                className={`text-base font-bold ${onPath("motrends/view") ? "text-blue-500" : "text-gray-700"
                                    }`}
                            >
                                View
                            </span>
                        )}
                    </Link>

                    {/* ACCOUNTS */}
                    <Link
                        href="/motrends/accounts"
                        className={`flex items-center justify-start h-8 ${expanded ? "w-44" : "w-10"
                            } gap-5 rounded-2xl ${onPath("/motrends/accounts")
                                ? "bg-blue-100 text-blue-500 pl-2"
                                : "text-gray-500 pl-2"
                            }`}
                    >
                        <MdOutlinePeople className="text-2xl shrink-0" />
                        {expanded && (
                            <span
                                className={`text-base font-bold ${onPath("/motrends/accounts") ? "text-blue-500" : "text-gray-700"}`}
                            >
                                Accounts
                            </span>
                        )}
                    </Link>
                </ul>
                {expanded && <span className=" text-sm text-gray-500 font-mono pl-3 transition-[width] duration-200">
                    COMPANY
                </span>}
                <ul
                    className={`flex flex-col flex-[4] gap-5 ${expanded ? "mt-0" : "mt-5"
                        }`}
                >
                    {/* LIBRARY */}
                    <Link
                        href="/motrends/library"
                        className={`mt-2 flex items-center justify-start h-8 ${expanded ? "w-44" : "w-10"
                            } gap-5 rounded-2xl  
                            ${onPath("/motrends/library") ? "bg-blue-100 text-blue-500 pl-2" : "text-gray-500 pl-2"}`}
                    >
                        <FaUniversity className="text-2xl shrink-0" />
                        {expanded && (
                            <span
                                className={`text-base font-bold ${onPath("/motrends/library") ? "text-blue-500" : "text-gray-700"
                                    }`}
                            >
                                Library
                            </span>
                        )}
                    </Link>

                    <Link
                        href="/motrends/configure"
                        className={` flex items-center justify-start h-8 ${expanded ? "w-44" : "w-10"
                            } gap-5 rounded-2xl ${onPath("/motrends/configure")
                                ? "bg-blue-100 text-blue-500 pl-3"
                                : "text-gray-500 pl-3"
                            }`}
                    >
                        <FaChartBar className="text-xl shrink-0" />
                        {expanded && (
                            <span
                                className={`text-base font-bold ${onPath("motrends/configure") ? "text-blue-500" : "text-gray-700"
                                    }`}
                            >
                                Configure
                            </span>
                        )}
                    </Link>
                </ul>


            </nav>


        </aside>
    )
}
export default Sidebar;
