import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const revalidate = 60; // Cache for 60 seconds

export async function GET() {
    try {
        const items = await prisma.menuItem.findMany({
            include: { category: true },
            orderBy: { createdAt: 'desc' },
        });
        return NextResponse.json(items);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch items' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        // Remove ID if present to avoid errors on create
        const { id, category, ...data } = body;

        const item = await prisma.menuItem.create({
            data: {
                ...data,
                price: parseFloat(data.price), // Ensure price is a number/decimal
            },
        });

        return NextResponse.json(item);
    } catch (error) {
        console.error("Create Item Error:", error);
        return NextResponse.json({ error: 'Failed to create item' }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const body = await request.json();
        const { id, category, ...data } = body;

        if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });

        const item = await prisma.menuItem.update({
            where: { id },
            data: {
                ...data,
                price: parseFloat(data.price),
            },
        });

        return NextResponse.json(item);
    } catch (error) {
        console.error("Update Item Error:", error);
        return NextResponse.json({ error: 'Failed to update item' }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });

        await prisma.menuItem.delete({ where: { id } });
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete item' }, { status: 500 });
    }
}
