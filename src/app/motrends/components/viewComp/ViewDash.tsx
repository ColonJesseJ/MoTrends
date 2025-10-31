'use client'
import { useState } from 'react'
import List from './List'
import Grid from './Grid'

export default function ViewDash() {
    const [view, setView] = useState<'list' | 'grid'>('list')

    return (
        <div className="w-full mt-6">
            <div className="flex flex-col mx-10">
                <div className="flex rounded-full border w-33 ml-auto  border-black overflow-hidden shadow-md">
                    <button
                        onClick={() => setView('list')}
                        className={`px-5 py-2 text-sm font-semibold transition-all ${view === 'list'
                            ? 'bg-blue-600 text-white'
                            : 'bg-blue-300 hover:bg-blue-400 text-black'
                            }`}
                    >
                        List
                    </button>

                    <button
                        onClick={() => setView('grid')}
                        className={`px-5 py-2 text-sm font-semibold transition-all ${view === 'grid'
                            ? 'bg-blue-600 text-white'
                            : 'bg-blue-300 hover:bg-blue-400 text-black'
                            }`}
                    >
                        Grid
                    </button>
                </div>

                <div className="w-full">
                    {view === 'list' ? <List /> : <Grid />}
                </div>
            </div>
        </div>
    )
}

