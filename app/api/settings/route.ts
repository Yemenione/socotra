import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    try {
        // There should be only one config, so findFirst is appropriate
        let config = await prisma.siteConfig.findFirst();

        // If no config exists, create a default one
        if (!config) {
            config = await prisma.siteConfig.create({
                data: {
                    heroVideoUrl: "/videos/hero-bg.mp4"
                }
            });
        }

        return NextResponse.json(config);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Check if there is an existing config to update
        const existingConfig = await prisma.siteConfig.findFirst();

        let config;
        if (existingConfig) {
            config = await prisma.siteConfig.update({
                where: { id: existingConfig.id },
                data: body,
            });
        } else {
            config = await prisma.siteConfig.create({
                data: body,
            });
        }

        return NextResponse.json(config);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 });
    }
}
