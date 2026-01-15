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

export async function PUT(request: Request) {
    try {
        const body = await request.json();
        const { id, title, titleEn, titleAr, order, slug } = body;

        if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });

        const category = await prisma.menuCategory.update({
            where: { id },
            data: {
                title,
                titleEn,
                titleAr,
                order: order || 0,
                slug // Allow slug updates if needed, logic can be refined
            },
        });

        return NextResponse.json(category);
    } catch (error) {
        console.error("Update Category Error:", error);
        return NextResponse.json({ error: 'Failed to update category' }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });

        await prisma.menuCategory.delete({ where: { id } });
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete category' }, { status: 500 });
    }
}
