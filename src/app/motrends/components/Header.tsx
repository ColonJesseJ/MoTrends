"use client";

import Head from './Head'
import Logo from './Logo'
import { RxDashboard } from "react-icons/rx";
import { FaRegBell } from "react-icons/fa";

const Header = () => {
    return (
        <header className="w-full bg-[#F9FAFB] border-b shadow-sm items-center justify-between flex sticky top-0 z-[20] mx-auto px-6 py-4 border-gray-200" >
            {/* sticky header uptop to remake MoFlo Cloud application */}
            <Head />
            <div className='flex items-center gap-6'>
                {/* USING BUTTONS BUT NO USE SINCE NTO NEEDED CURRENTLY*/}
                <button>
                    <RxDashboard className='text-2xl text-blue-500' />
                </button>
                <button>
                    <FaRegBell className='text-xl text-blue-500' />
                </button>
                <button> {/* I'm reusing the logo since idk how to geth the profile */}
                    <Logo />
                </button>
            </div>
        </header>
    )
}

export default Header;
