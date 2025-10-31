'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const Dashboard: React.FC = () => {
    const [totalTrends, setTotalTrends] = useState(0);
    const [recentTrend, setRecentTrend] = useState<any>(null);

    useEffect(() => {
        const trends = JSON.parse(localStorage.getItem('motrends') || '[]');
        setTotalTrends(trends.length);
        if (trends.length > 0) {
            setRecentTrend(trends[trends.length - 1]);
        }
    }, []);


    return (
        <div className="flex flex-col items-center justify-center p-8">
            <div className='mt-20 flex flex-col items-center'   >
                <h1 className="text-8xl font-extrabold text-gray-800 mb-4">
                    MoTrends
                </h1>
                <p className="text-gray-500 mb-12">
                    AI-powered trend generation
                </p>
            </div>


            {/* Stats */}
            <div className='flex justify-evenly w-242'  >
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8 items-center">
                    <p className="text-gray-500 text-sm">Total Trends Generated</p>
                    <p className="text-6xl font-bold text-blue-600 mt-2">{totalTrends}</p>
                </div>
                {recentTrend && recentTrend.title && (
                    <div className="bg-white rounded-xl shadow-lg p-8 mb-8 items-center">
                        <p className="text-gray-500 text-sm">Most Recent Score</p>
                        <p className="text-6xl font-bold text-blue-600 mt-2">{recentTrend.engagementScore}</p>
                    </div>
                )}
                {recentTrend && recentTrend.title && (
                    <div className="bg-white rounded-xl shadow-lg p-8 mb-8 items-center">
                        <p className="text-gray-500 text-sm">Most Recent Industry</p>
                        <p className="text-3xl font-bold text-blue-600 mt-5">{recentTrend.industry}</p>
                    </div>
                )}

            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-10 w-1/2 justify-center">
                <Link href="/motrends/create">
                    <button className="bg-blue-600 text-white w-100 font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
                        Create New Trend
                    </button>
                </Link>

                <Link href="/motrends/view">
                    <button className="bg-gray-200 text-gray-800 w-100 font-bold py-3 px-8 rounded-lg hover:bg-gray-300 transition-colors">
                        View All Trends
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Dashboard;
