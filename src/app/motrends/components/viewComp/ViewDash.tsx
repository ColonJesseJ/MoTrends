'use client'
import { useState } from 'react'
import List from './List'
import Grid from './Grid'

export default function ViewDash() {
    const [view, setView] = useState<'list' | 'grid'>('list')

    return (
        <div className="flex flex-col w-full items-end">
            {/* Toggle pill */}
            <div className="flex m-4 rounded-full border border-black overflow-hidden shadow-sm">
                <button
                    onClick={() => setView('list')}
                    className={`px-5 py-2 text-sm font-semibold transition-all 
                    ${view === 'list'
                            ? 'bg-blue-600'
                            : 'bg-blue-300 hover:bg-blue-400'
                        }`}
                >
                    List
                </button>

                <button
                    onClick={() => setView('grid')}
                    className={`px-5 py-2 text-sm font-semibold transition-all 
                    ${view === 'grid'
                            ? 'bg-blue-600 '
                            : 'bg-blue-300 hover:bg-blue-400'
                        }`}
                >
                    Grid
                </button>
            </div>

            {/* View section */}
            <div className="w-full mt-6">
                {view === 'list' ? <List /> : <Grid />}
            </div>
        </div>
    )
}
