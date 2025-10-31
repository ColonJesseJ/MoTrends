import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { id } = await req.json();
    const filePath = path.join(process.cwd(), "data", "motrends.txt");

    if (!fs.existsSync(filePath)) return NextResponse.json({ error: "File not found" });

    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const updated = data.filter((t: any) => t.id !== id);
    fs.writeFileSync(filePath, JSON.stringify(updated, null, 2));

    return NextResponse.json({ success: true });
}

