import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    try {
        const reservations = await prisma.reservation.findMany({
            orderBy: { createdAt: 'desc' },
        });
        return NextResponse.json(reservations);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch reservations' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, date, time, guests, phone, email } = body;

        const reservation = await prisma.reservation.create({
            data: {
                name,
                email: email || 'not_provided@example.com', // Optional field handling
                phone: phone || '0000000000',
                date: new Date(date),
                time,
                guests: parseInt(guests),
            },
        });

        return NextResponse.json(reservation);
    } catch (error) {
        console.error("Reservation Error:", error);
        return NextResponse.json({ error: 'Failed to create reservation' }, { status: 500 });
    }
}
