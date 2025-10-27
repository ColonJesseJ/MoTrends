"use client";

import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    return (
        <header className="w-full bg-red-500 border-b shadow-sm items-center justify-between flex sticky top-0 z-[20] mx-auto px-12 py-40 border-gray-500" >
            <Link href="/" className='flex items-center gap-2 ' >
                <Image
                    src="https://framerusercontent.com/images/SN1KknlqtnfMhuO28O7dyyGrNOk.png"
                    alt="MoFlo Logo"
                    width={50}
                    height={50}
                    className='rounded-md'
                />
            </Link>

            <h1>
                hello
            </h1>
        </header>
    )
}

export default Header;
