import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json(
                { error: "No file received." },
                { status: 400 }
            );
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        const filename = Date.now() + "_" + file.name.replaceAll(" ", "_");

        // Save to public/uploads
        await writeFile(
            path.join(process.cwd(), "public/uploads/" + filename),
            buffer
        );

        return NextResponse.json({
            success: true,
            url: "/uploads/" + filename
        });

    } catch (error) {
        console.log("Error occurred ", error);
        return NextResponse.json({ error: "Failed" }, { status: 500 });
    }
}
