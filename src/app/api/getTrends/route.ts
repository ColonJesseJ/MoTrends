import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
    const filePath = path.join(process.cwd(), "data", "motrends.txt");

    try {
        // check if file exisits, if not create
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, "[]", "utf8");
        }

        // read and parse the data
        const data = fs.readFileSync(filePath, "utf8");
        const trends = JSON.parse(data);

        return NextResponse.json(trends); // return parsed data
    } catch (err) {
        console.error("Error reading motrends.txt:", err);
    }
}

