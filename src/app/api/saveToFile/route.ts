import path from "path"
import fs from "fs"
import { NextResponse } from "next/server";

// Server Action
export async function POST(req: Request) {
    const newTrends = await req.json(); // get data from frontend

    try {
        // Make sure we have a data folder
        const folder = path.join(process.cwd(), "data");
        if (!fs.existsSync(folder)) {
            fs.mkdirSync(folder);
        }
        const filePath = path.join(folder, "motrends.txt");

        let existingTrends: any[] = [];
        if (fs.existsSync(filePath)) {
            const text = fs.readFileSync(filePath, "utf8");
            if (text.trim()) {
                existingTrends = JSON.parse(text);
            }
        }

        // Rewrite file with new appended file
        const allTrends = [...existingTrends, ...newTrends];
        fs.writeFileSync(filePath, JSON.stringify(allTrends, null, 2));

        return NextResponse.json({ message: "Saved!" });

    } catch (err) {
        console.error("Error reading motrends.txt:", err);
    }
}
