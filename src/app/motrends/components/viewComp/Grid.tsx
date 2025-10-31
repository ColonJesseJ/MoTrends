'use client'

import { useEffect, useState } from "react";
import { Trend } from "../../../../../data/Trend";

export default function Grid() {

    const [trends, setTrends] = useState<Trend[] | null>(null);
    useEffect(() => {
        async function loadData() {
            const res = await fetch("/api/getTrends");
            const data = await res.json();
            setTrends(data);
        }
        loadData();
    }, []);

    async function handleDelete(id: string) {
        const confirmDelete = confirm("Are you sure you want to delete this trend?");
        if (!confirmDelete) return;

        if (trends !== null) {
            const updated = trends.filter((t) => t.id !== id);
            setTrends(updated);
        }

        // Tell backend to delete from file
        await fetch("/api/deleteTrend", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id }),
        });
    }

    if (trends !== null) {
        return (
            <div className="my-6">
                <h1></h1>
                {trends.length === 0 ? (
                    <p>Go ahead to generate some trends on the create page!!!</p>
                ) : (
                    <div className="grid grid-cols-3 gap-2 gap-x-4">
                        {trends.map((t) => (
                            <li
                                key={t.id}
                                className="flex justify-between items-center border p-3 rounded-lg m-2 max-w-full mx-auto bg-white shadow-sm text-xs flex-col"
                            >
                                <div className="font-semibold text-gray-800 ">{t.title}</div>
                                <span className="text-gray-600  text-center ">{t.prediction}</span>
                                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                    {t.actionItems.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                                <div className="flex justify-center gap-3 mt-2">
                                    <span className="bg-pink-200 text-gray-700 px-3 py-1 rounded-lg font-medium text-sm">
                                        {t.engagementScore}
                                    </span>
                                    <span className="bg-purple-200 text-gray-700 px-3 py-1 rounded-lg font-medium text-sm">
                                        {t.industry}
                                    </span>
                                    <span className="bg-green-200 text-gray-700 px-3 py-1 rounded-lg font-medium text-sm">
                                        {t.trendType}
                                    </span>
                                    <span className="bg-blue-200 text-gray-700 px-3 py-1 rounded-lg font-medium text-sm">
                                        {t.timeframe}
                                    </span>
                                </div>

                                <div className="flex items-center gap-7 mt-2">
                                    <button
                                        onClick={() => handleDelete(t.id)}
                                        className="px-3 mt-2 w-50 py-1 text-sm font-medium rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => handleDelete(t.id)}
                                        className="px-3 mt-2 w-50 py-1 text-sm font-medium rounded-md bg-red-500 text-white hover:bg-red-600 transition"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </div>

                )}
            </div>
        )
    }
}
