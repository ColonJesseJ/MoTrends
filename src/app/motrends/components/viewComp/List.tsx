import fs from "fs";
import path from "path";

export default function List() {
    const filePath = path.join(process.cwd(), "data", "motrends.txt");
    let trends: any[] = [];

    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, "utf8");
        trends = JSON.parse(data);
    }
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
