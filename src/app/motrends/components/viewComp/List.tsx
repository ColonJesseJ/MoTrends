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

    if (trends !== null) {
        return (
            <div style={{ padding: 20 }}>
                <h1>Your Saved Trends</h1>
                {trends.length === 0 ? (
                    <p>No trends found yet.</p>
                ) : (
                    <ul>
                        {trends.map((t) => (
                            <li key={t.id}>
                                <b>{t.title}</b> - ({t.trendType})
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        )
    }
}
