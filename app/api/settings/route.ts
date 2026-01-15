import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    try {
        let config = await prisma.siteConfig.findFirst();

        // Create default config if none exists
        if (!config) {
            config = await prisma.siteConfig.create({
                data: {
                    contactEmail: 'contact@socotra.com',
                    seoTitle: 'Socotra | Luxury Yemeni Cuisine',
                }
            });
        }

        return NextResponse.json(config);
    } catch (error) {
        console.error("Settings GET error:", error);
        return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Upsert logic (update if exists, create if not - though GET ensures existence)
        const firstConfig = await prisma.siteConfig.findFirst();

        const config = await prisma.siteConfig.upsert({
            where: { id: firstConfig?.id || 'default-id-placeholder' },
            update: body,
            create: body,
        });

        return NextResponse.json(config);
    } catch (error) {
        console.error("Settings POST error:", error);
        return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 });
    }
}
