"use client";

import Link from 'next/link'
import Logo from './Logo'

// top left part of the header under to keep on left side
const Head = () => {
    return (
        <div className='flex items-center gap-4'>
            {/* flex with gap starting off with logo*/}
            <Link href='/'>
                <Logo />
            </Link>
            {/* Add MoFlo cloud + motrends*/}
            <div className='flex items-center'>
                <h1 className='text-2xl font-extrabold'>
                    MoFlo<span className='mx-0.5 font-normal'>Cloud</span></h1>
                <h1 className=' mx-1 font-extralight text-gray-700 text-lg'>•
                </h1>
                <Link href='/motrends'>
                    <h1 className='font-semibold text-blue-500 text-base'>MoTrends</h1>
                </Link>
            </div>

        </div >
    )
}

export default Head;
