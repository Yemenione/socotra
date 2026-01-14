import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    try {
        const categories = await prisma.menuCategory.findMany({
            include: { items: true },
            orderBy: { order: 'asc' },
        });
        return NextResponse.json(categories);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 });
    }
}
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { title, titleEn, titleAr, order } = body;

        // Simple slug generation
        const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

        const category = await prisma.menuCategory.create({
            data: {
                slug: slug + '-' + Date.now(), // Ensure uniqueness
                title,
                titleEn,
                titleAr,
                order: order || 0
            },
        });

        return NextResponse.json(category);
    } catch (error) {
        console.error("Failed to create category", error);
        return NextResponse.json({ error: 'Failed to create category' }, { status: 500 });
    }
}
