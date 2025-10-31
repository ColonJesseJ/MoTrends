'use client'

import { useEffect, useState } from "react";
import { Trend } from "../../../../../data/Trend";

export default function List() {

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
                    <ul>
                        {trends.map((t) => (
                            <li
                                key={t.id}
                                className="flex justify-between items-center border p-3 rounded-full m-2 max-w-full mx-auto bg-white shadow-sm text-xs"
                            >
                                <span className="font-semibold text-gray-800 w-1/4 truncate">{t.title}</span>
                                <span className="text-gray-600 w-3/5 text-center truncate">{t.prediction}</span>
                                <span className="text-gray-600 w-1/16 text-center">{t.engagementScore}</span>
                                <span className="text-gray-500 w-1/10 text-center">{t.industry}</span>
                                <button
                                    onClick={() => handleDelete(t.id)}
                                    className="px-3 py-1 text-sm font-medium rounded-md bg-red-500 text-white hover:bg-red-600 transition"
                                >
                                    Delete
                                </button>

                            </li>
                        ))}
                    </ul>

                )}
            </div>
        )
    }
}
